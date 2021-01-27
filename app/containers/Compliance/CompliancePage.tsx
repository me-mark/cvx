import "../Covenant/Covenent.scss"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovenantComplianceList } from "./complianceActions";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { Spin } from "antd";
import { createStructuredSelector } from "reselect";
import makeSelectCompliance from "./complianceSelectors";
import { CVXTab } from "components/common";
import { CovenantTab } from "../../constants/common";
import ComplianceFilter from "components/Compliance/ComplianceFilter";
import ComplianceDetail from "components/Compliance/ComplianceDetail";
import { CovenantList } from "components/Compliance";
import complianceReducer from "./complianceReducer";
import complianceSaga from "./complianceSaga";
import { useHistory } from "react-router-dom";
import { CVXTabDataModel } from "components/common/commonModels";

const TBL_COMPLIANCE_HEADER = [
  "ID",
  "Cat./Type",
  "Title",
  "Status",
  "Covenant",
  "Due Date",
];

const TBL_HEADER_UPLOAD = [
  "ID",
  "Document name & Description",
  "Uploaded date",
  "Expiry date",
];


const complianceSelector = createStructuredSelector({
  compliance: makeSelectCompliance(),
});


export default function CompliancePage() {
  useInjectReducer({ key: "compliance", reducer: complianceReducer });
  useInjectSaga({ key: "compliance", saga: complianceSaga });
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    compliance: { complianceDetails, covenantComplianceList },
  } = useSelector(complianceSelector);

  const handleOnClickTab = (item: CVXTabDataModel) => {
    history.push((item.label.toLowerCase()));
  }

  useEffect(() => {
    dispatch(getCovenantComplianceList());
  }, []);

  if (covenantComplianceList && covenantComplianceList.length) {

    return (
      <section className="page-wrapper">
        <CVXTab tabData={CovenantTab} defaultActive={CovenantTab[1].id} onClickTab={handleOnClickTab}/>
        <div id="Compliance">
          <ComplianceFilter />
          <div className="covenent-body">
            <div className="covenent-body__col">
              <div className="covenent-body__title">Covenants</div>
              <CovenantList
                tableHeader={TBL_COMPLIANCE_HEADER}
                data={covenantComplianceList}
              />
            </div>
            <div className="covenent-body__col">
              <ComplianceDetail
                tableHeader={TBL_HEADER_UPLOAD}
                complianceDetails={complianceDetails}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (<></>);
};
