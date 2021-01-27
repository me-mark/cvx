import "./GeneralInfo.scss";
import React from "react";
import { CVXCard } from "components/common";
import { formatCurrency } from "utils/number";
import makeSelectSOP from "containers/SOP/SOPSelectors";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

const SOPSelector = createStructuredSelector({
  sop: makeSelectSOP(),
});

export function GeneralInfo(props) {
  const {
    sop: { currentPeriod },
  } = useSelector(SOPSelector);

  return (
    <div className="general-info">
      <div className="general-info__input">
        <div className="general-info__input__label">Net Assets</div>
        <CVXCard title={formatCurrency(currentPeriod?.totalNetAssets)} />
      </div>
      <div className="general-info__input">
        <div className="general-info__input__label">Net Liabilities</div>
        <CVXCard title={formatCurrency(currentPeriod?.totalNetLiabilities)} />
      </div>
      <div className="general-info__input">
        <div className="general-info__input__label">Monthly Income</div>
        <CVXCard title={formatCurrency(currentPeriod?.totalIncome)} />
      </div>
      <div className="general-info__input">
        <div className="general-info__input__label">Monthly Expenses</div>
        <CVXCard title={formatCurrency(currentPeriod?.totalExpenses)} />
      </div>
    </div>
  );
}
