import "./Covenent.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import moment from 'moment';
import * as common from "../../utils/common";
import { CVXTab } from "components/common";
import {
  NewProposedCovenants,
  CurrentCovenants,
  CovenantDetail,
} from "components/Covenant";
import { CovenantTab } from "../../constants/common";
import { getCovenantList } from "./covenantActions";
import covenantReducer from "./covenantReducer";
import covenantSaga from "./covenantSaga";
import makeSelectCovenant from "./covenantSelectors";
import { CVXTabDataModel } from "components/common/commonModels";
import { CovenantModel, CovenantStatusEnum } from "./covenantTypes";
import ComplianceFilter from "components/Compliance/ComplianceFilter";
import { DATE_FORMAT } from "utils/constants";

const TBL_HEADER = [
  "ID",
  "Category",
  "Title",
  "Test Value",
  "Frequency",
  "Report Within",
  "Start Date",
];


const TBL_HEADER_UPLOAD = [
  "ID",
  "Document name & Description",
  "Uploaded date",
  "Expiry date",
];

function filterCovernantListByStatus(covenantList: CovenantModel[], status) {
  return covenantList.filter((p) => p.status === status);
}

function getDisplayCovenantFields(data) {
  let arrItems: any[] = [];
  data.forEach((item) => {
    arrItems.push({
      covenantId: item.covenantId,
      covenantType: item.covenantType,
      title: item.title,
      testValue: item.testValue,
      frequency: item.frequency,
      reportWithinDays: item.reportWithinDays,
      startDate: moment(item.startDate).format(DATE_FORMAT),
    });
  });
  return arrItems;
}

function covernantListGroupByOwner(covenantList: CovenantModel[]) {
  let resultCovenantListGroup: any[] = [];
  for (let keys in common.groupByKey(covenantList, "ownerId")) {
    const groupName = covenantList.find(o => o.ownerId === +keys)?.customerOrGroupName;
    resultCovenantListGroup.push({
      name: groupName,
      items: getDisplayCovenantFields(common.groupByKey(covenantList, "ownerId")[keys]),
    });
  }
  return resultCovenantListGroup;
}

const covenantSelector = createStructuredSelector({
  covenant: makeSelectCovenant(),
});

// Since this component is simple and static, there's no parent container for it.
export default function CovenantPage() {
  useInjectReducer({ key: "covenant", reducer: covenantReducer });
  useInjectSaga({ key: "covenant", saga: covenantSaga });
  const dispatch = useDispatch();
  const history = useHistory()

  const {
    covenant: { covenantList, covenantDetails },
  } = useSelector(covenantSelector);

  const handleOnClickTab = (item: CVXTabDataModel) => {
    history.push((item.label.toLowerCase()));
  }

  useEffect(() => {
    dispatch(getCovenantList());
  }, []);

  if (covenantList && covenantList.length) {
    const covenantListNew = covernantListGroupByOwner(
      filterCovernantListByStatus(covenantList, CovenantStatusEnum.New)
    );
    const covenantListActive = covernantListGroupByOwner(
      filterCovernantListByStatus(covenantList, CovenantStatusEnum.Active)
    );

    return (
      <section className="page-wrapper">
        <CVXTab tabData={CovenantTab} defaultActive={CovenantTab[0].id} onClickTab={handleOnClickTab} />
        <ComplianceFilter />
        <div id="Covenant" >
          <div className="covenent-body">
            <div className="covenent-body__col">
              <div className="covenent-body__title">
                New Proposed Covenants
              </div>
              <NewProposedCovenants
                tableHeader={TBL_HEADER}
                data={covenantListNew} />
              <div className="covenent-body__title">
                Current Covenants
              </div>
              <CurrentCovenants
                tableHeader={TBL_HEADER}
                data={covenantListActive}
              />
            </div>
            <div className="covenent-body__col">
              <CovenantDetail
                tableHeader={TBL_HEADER_UPLOAD}
                covenantDetails={covenantDetails}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (<></>);
};
