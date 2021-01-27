import "./SOPPage.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { CVXTab } from 'components/common';
import { Periods, DetailInfo } from "components";
import { RoutePaths } from "containers/App/routes";
import { CVXTabDataModel } from "components/common/commonModels";
import { GeneralInfo } from "components/SOP/GeneralInfo";
import { CVXSubTab } from "components/common";
import { SEARCH_PARAM_KEYS, SOP_SUBTABS } from "containers/App/constants";
import { getSearchParamValue, setSearchParamValue } from "utils/searchParams";
import {
  getSections,
  setSOPCurrentSubTabId,
  getApplicantsAction,
  getPeriods,
  setSOPCurrentApplicant,
} from "./SOPActions";
import SOPReducer from "./SOPReducer";
import SOPSaga from "./SOPSaga";
import makeSelectSOP from "./SOPSelectors";

const SOPSelector = createStructuredSelector({
  sop: makeSelectSOP(),
});

export default function SOPPage() {
  useInjectReducer({ key: "sop", reducer: SOPReducer });
  useInjectSaga({ key: "sop", saga: SOPSaga });
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    sop: { currentApplicant, currentSubTabId, applicantList, currentPeriod },
  } = useSelector(SOPSelector);

  const searchParams = history.location.search;
  const currentApplicantId = +getSearchParamValue(
    searchParams,
    SEARCH_PARAM_KEYS.APPLICATION_ID
  );

  const applicantTabs: CVXTabDataModel[] =
    applicantList && applicantList.length
      ? applicantList.map((applicant) => {
        return { id: applicant.groupId, label: applicant.fullName };
      })
      : [];



  useEffect(() => {
    dispatch(getApplicantsAction(history));
    dispatch(getPeriods());
  }, []);

  useEffect(() => {
    if (currentPeriod) {
      dispatch(getSections({ currentSubTabId, currentPeriod }));
    }
  }, [currentPeriod]);

  if (!currentApplicant || !applicantList?.length) {
    return <></>;
  }

  const handleOnClickTab = (item: CVXTabDataModel) => {
    const currentApplicant = applicantList.find(o => o.groupId === item.id);
    const newSearchParams = setSearchParamValue(
      searchParams,
      SEARCH_PARAM_KEYS.APPLICATION_ID,
      String(item.id)
    );
    history.push(`${RoutePaths.SOP}?${newSearchParams}`);
    dispatch(setSOPCurrentApplicant(currentApplicant!))
  };
  const handleOnClickSubTab = (item: CVXTabDataModel) => {
    dispatch(
      setSOPCurrentSubTabId({ history: history, currentSubTabId: +item.id, currentPeriod: currentPeriod! })
    );
  };

  return (
    <div className="page-wrapper">
      <CVXTab
        tabData={applicantTabs}
        onClickTab={handleOnClickTab}
        defaultActive={currentApplicantId}
      />
      <Periods />
      <GeneralInfo />
      <CVXSubTab
        tabData={SOP_SUBTABS}
        onClickTab={handleOnClickSubTab}
        defaultActive={currentSubTabId}
      />
      <DetailInfo />
    </div>
  );
}
