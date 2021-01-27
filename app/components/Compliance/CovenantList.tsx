import React, { useEffect } from "react";
import { CVXTableGroupedRow, CVXTableHeader, CVXTableRow } from "../common";
import { useSelector, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import makeSelectCompliance from "containers/Compliance/complianceSelectors";
import { setCovenantComplianceActiveKey, getComplianceDetails } from "containers/Compliance/complianceActions";
import { CovenantModel } from "containers/Covenant/covenantTypes";
import * as common from "../../utils/common";
import moment from 'moment';
import { DATE_FORMAT } from "utils/constants";
import { nameof } from "components/common/commonModels";
import { ComplianceDetailModel } from "containers/Compliance/complianceTypes";

const covenantSelector = createStructuredSelector({
  covenant: makeSelectCompliance(),
});

function getDisplayCovenantFields(data: ComplianceDetailModel[]) {
  let arrItems: any[] = [];
  data.forEach((item) => {
    arrItems.push({
      complianceId: item.complianceId,
      covenantType: item.covenantType,
      title: item.title,
      status: item.covenantInstanceStatus,
      covenantId: item.covenantId,
      dueDate: moment(item.dueDate).format(DATE_FORMAT),
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

export const CovenantList = (props) => {
  const {
    tableHeader,
    data,
  } = props;

  const {
    covenant: { covenantComplianceActiveKey },
  } = useSelector(covenantSelector);

  const dispatch = useDispatch();

  const handleCovenantItemClick = (complianceId) => {
    dispatch(setCovenantComplianceActiveKey(complianceId));
    dispatch(getComplianceDetails(complianceId));
    window.scrollTo(0, 0);
  };
  let firstComplianceId = null;

  const groupedCovenantList = covernantListGroupByOwner(data);

  useEffect(() => {
    if (data && data.length) {
      firstComplianceId = data && data.length ? data[0].complianceId : null;
      dispatch(setCovenantComplianceActiveKey(firstComplianceId));
      dispatch(getComplianceDetails(firstComplianceId));
    }
  }, [data]);

  return (
    <div className="cvx-table-wrapper">
      <table className="custom-table">
        <tbody>
          <CVXTableHeader
            data={tableHeader}
            thStyles={[{ width: '8ch' }, { width: '100%' }, { width: '100%' }, { width: '8ch' }, { width: '10ch' }, { width: '11ch' }]}
          />
          {groupedCovenantList &&
            groupedCovenantList.length > 0 &&
            groupedCovenantList.map((covenant: CovenantModel, index) => {
              return (
                <CVXTableGroupedRow
                  data={covenant}
                  activeKey={covenantComplianceActiveKey}
                  tdStyles={[{ width: '8ch' }, { width: '100%' }, { width: '100%' }, { width: '8ch' }, { width: '8ch' }, { width: '11ch' }]}
                  onClickChildRow={handleCovenantItemClick}
                  primaryKey={nameof<CovenantModel>('complianceId')}
                  isOpenFirstGroup={index === 0}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
