import "./DetailInfo.scss";
import React, { useEffect } from "react";
import {
  CVXTextInput,
  CVXInputNumber,
  CVXCard,
  CVXButton,
  CVXSelectBox,
} from "components/common";
import _ from 'lodash';
import { formatCurrency, currencyFormatter } from "utils/number";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import { createStructuredSelector } from "reselect";
import makeSelectSOP from "containers/SOP/SOPSelectors";
import { useDispatch, useSelector } from "react-redux";
import { SOPCategoryModel, SOPSectionItemModel } from "containers/SOP/SOPTypes";
import { addSOPSection, getSOPCategoryList } from "containers/SOP/SOPActions";
import { CVXOptionModel, nameof } from "components/common/commonModels";
import { SOPDetailSkeleton } from "./SOPSkeleton";

const SOPSelector = createStructuredSelector({
  sop: makeSelectSOP(),
});

const getTotal = (currentSections: SOPSectionItemModel[]) => {
  let total = 0;
  currentSections.map((section) => (total += section.amount || 0));
  return total;
};


const convertCategoryListToOptionList = (categoryList: SOPCategoryModel[]): CVXOptionModel[] => {
  if (!categoryList || !categoryList.length) {
    return [];
  }

  const categoryListSortedByDisplayOrder = _.orderBy(categoryList, nameof<SOPCategoryModel>('displayOrder'))
  return categoryListSortedByDisplayOrder.map(category => {
    return {
      id: category.sopCategoryId,
      value: category.sopCategoryId,
      label: category.sopCategoryName
    }
  });
}

export function DetailInfo() {
  const dispatch = useDispatch();
  const {
    sop: { currentSections, categoryList, sopDetailLoading, currentSubTabId, currentPeriod },
  } = useSelector(SOPSelector);

  useEffect(() => {
    dispatch(getSOPCategoryList(currentSubTabId));
  }, []);

  if (!currentSections || currentSections.length === 0 || !currentPeriod) {
    return (
      <div className="sop-skeleton__detail">
        <div className="general-info__input__label">There is no data</div>
      </div>
    );
  }

  if (!categoryList || sopDetailLoading) {
    return <SOPDetailSkeleton />
  }

  const additionSectionRows = Array.from({ length: 12 - currentSections.length }, (v, i) => i);
  const categoryOptionList = convertCategoryListToOptionList(categoryList);

  return (
    <div className="detail-info">
      <div className="detail-info__total">
        <div>
          <div className="detail-info__total__title">Total</div>
          <CVXCard title={formatCurrency(getTotal(currentSections))} />
        </div>
        <div className="detail-info__total__buttons">
          <CVXButton
            placeholder="Save"
            icon={<FontAwesomeIcon icon={faSave} color="currentColor" />}
          />
          <CVXButton
            placeholder="Cancel"
            icon={<FontAwesomeIcon icon={faTimes} color="currentColor" />}
            type="text"
          />
        </div>
      </div>
      <div>
        <div className="detail-info__titles">
          <span>Category</span>
          <span>Comments</span>
          <span className="text-right">Amount</span>
        </div>
        <div className="detail-info__content">
          {currentSections.map((detail, index) => {
            return (
              <div className="detail-info__content__item" key={detail.itemId}>
                <CVXSelectBox
                  options={categoryOptionList}
                  className="detail-info__content__item__category"
                  defaultValue={detail.categoryCode}
                />
                <CVXTextInput
                  defaultValue={detail.comment}
                  className="detail-info__content__item__comment"
                />
                <CVXInputNumber
                  defaultValue={detail.amount}
                  formatter={currencyFormatter}
                />
              </div>
            );
          })}
          {additionSectionRows.map((detail, index) => {
            const defaultSelectValue = index < categoryOptionList.length ? categoryOptionList[index].value : null;
            return (
              <div className="detail-info__content__item" key={index}>
                <CVXSelectBox
                  options={categoryOptionList}
                  className="detail-info__content__item__category"
                  defaultValue={defaultSelectValue}
                />
                <CVXTextInput
                  className="detail-info__content__item__comment"
                />
                <CVXInputNumber
                  formatter={currencyFormatter}
                />
              </div>
            );
          })}
        </div>
        <div className="detail-info__add-button">
          <CVXButton
            placeholder="Add"
            icon={<FontAwesomeIcon icon={faPlus} color="currentColor" />}
            onClick={() => dispatch(addSOPSection())}
          />
        </div>
      </div>
    </div>
  );
}
