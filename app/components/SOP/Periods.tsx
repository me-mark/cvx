import "./Periods.scss";
import React, { useEffect } from "react";
import { CVXDatePicker, CVXCard, CVXButton } from "components/common";
import moment from "moment";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UNDEFINED_KEYS } from "containers/App/constants";
import _ from "lodash";
import { createStructuredSelector } from "reselect";
import makeSelectSOP from "containers/SOP/SOPSelectors";
import { useSelector, useDispatch } from "react-redux";
import { getPeriods, setSOPCurrentPeriod } from "containers/SOP/SOPActions";
import { DATE_FORMAT } from "utils/constants";

const SOPSelector = createStructuredSelector({
  sop: makeSelectSOP(),
});

export function Periods() {
  const {
    sop: { periodList, currentPeriod, currentApplicant },
  } = useSelector(SOPSelector);

  const dispatch = useDispatch();

  const handleOnClickAddPeriod = () => { }
  const handleOnClickRemovePeriod = () => { };

  useEffect(() => {
    dispatch(getPeriods());
  }, [currentApplicant])

  if (!periodList) {
    return <></>;
  }
  return (
    <div className="periods">
      {periodList.length !== 0 && <div className="periods__title">As of date</div>}
      <div className="periods__list">
        {periodList.map((period, index) => {
          if (period?.statementPeriodID === UNDEFINED_KEYS.UNDEFINED_ID) {
            return (
              <CVXDatePicker
                defaultValue={moment(period.asOfDate)}
                key={index}
              />
            );
          }
          return (
            <CVXCard
              title={moment(period.asOfDate).format(DATE_FORMAT)}
              isActive={period.statementPeriodID === currentPeriod?.statementPeriodID}
              onClick={() => dispatch(setSOPCurrentPeriod(period))}
              key={index}
            />
          );
        })}
        {periodList.length === 0 && <div className="general-info__input__label">There is no Periods</div>}
        <CVXButton
          placeholder="Add Period"
          icon={<FontAwesomeIcon icon={faPlus} color="currentColor" />}
          onClick={handleOnClickAddPeriod}
        />
        <CVXButton
          placeholder="Delete Period"
          icon={<FontAwesomeIcon icon={faMinus} color="currentColor" />}
          onClick={handleOnClickRemovePeriod}
        />
      </div>
    </div>
  );
}
