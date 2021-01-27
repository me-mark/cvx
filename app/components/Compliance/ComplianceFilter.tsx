import { CVXSelectBoxWithTitle } from "components/common";
import React from "react";
import "./Compliance.scss";
const ComplianceFilter = (props) => {
  return (
    <div className="covenant-filters">
      <div className="covenant-filters__placeholder">
        Use dropdown on the left to filter Covenants to your needs.
      </div>
      <div className="covenant-filters__filters cvx-col-2">
        <CVXSelectBoxWithTitle
          title="filter by category/type"
          disabled={true}
          options={[
            { id: 1, value: "All", label: "All" },
            { id: 2, value: "B", label: "B" },
            { id: 3, value: "3", label: "3" },
          ]} />
        <CVXSelectBoxWithTitle
          title="filter by status"
          disabled={true}
          options={[
            { id: 1, value: "All", label: "All" },
            { id: 2, value: "B", label: "B" },
            { id: 3, value: "3", label: "3" },
          ]} 
          defaultValue="All"
          />
      </div>
    </div>
  );
};
export default ComplianceFilter;
