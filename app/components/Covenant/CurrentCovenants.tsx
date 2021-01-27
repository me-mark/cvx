import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CVXTableHeader, CVXTableGroupedRow } from "components/common";
import {
  setCovenantActiveKey,
  getCovenantDetails,
} from "containers/Covenant/covenantActions";
import { createStructuredSelector } from "reselect";
import makeSelectCovenant from "containers/Covenant/covenantSelectors";
import { CovenantModel } from "containers/Covenant/covenantTypes";
import { nameof } from "components/common/commonModels";

const covenantSelector = createStructuredSelector({
  covenant: makeSelectCovenant(),
});

export const CurrentCovenants = (props) => {
  const { tableHeader, data } = props;

  const {
    covenant: { covenantActiveKey },
  } = useSelector(covenantSelector);

  const dispatch = useDispatch();

  const handleCovenantItemClick = (covenantId) => {
    dispatch(setCovenantActiveKey(covenantId));
    dispatch(getCovenantDetails(covenantId));
    window.scrollTo(0, 0);
  };

  return (
    <div className="cvx-table-wrapper">
      <table className="custom-table">
        <tbody>
          <CVXTableHeader
            data={tableHeader}
            thStyles={[{ width: '8ch' }, { width: '100%' }, { width: '100%' }, { width: '10ch' }, { width: '8ch' }, { width: '10ch' }, { width: '11ch' }]}
          />
          {data &&
            data.length &&
            data.map((covenant) => (
              <CVXTableGroupedRow
                data={covenant}
                activeKey={covenantActiveKey}
                onClickChildRow={handleCovenantItemClick}
                primaryKey={nameof<CovenantModel>('covenantId')}
                tdStyles={[{ width: '8ch' }, { width: '100%' }, { width: '100%' }, { width: '10ch' }, { width: '8ch' }, { width: '10ch' }, { width: '11ch' }]}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};