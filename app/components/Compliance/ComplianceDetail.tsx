import "./Compliance.scss";
import "../Covenant/CovenantDetail.scss";
import React, { useState } from "react";
import moment from 'moment';
import {
  CheckOutlined,
  VerticalAlignBottomOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import {
  CVXDatePicker,
  CVXUploadInput,
  CVXIconButton,
  CVXTextArea,
  CVXCheckBoxList,
  CVXTableHeader,
  CVXTableRow,
  CVXSelectBoxWithTitle,
  CVXDivCollapseExpand,
} from "../common";
import { ComplianceDetailModel } from "containers/Compliance/complianceTypes";
import { DATE_FORMAT } from "utils/constants";

const FAKE_DATA_WITH_ADDITION_DETAILS = [
  {
    id: 101,
    value: {
      info: "Some document name.pdf",
      additionInfo:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    uploadDate: "14.07.2018.",
    expDate: "14.07.2018.",
  },
  {
    id: 101,
    value: {
      info: "Some document name2 longer name.pdf",
      additionInfo:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    },
    uploadData: "14.07.2018.",
    expDate: "14.07.2018.",
  },
];

interface ComplianceDetailProps {
  tableHeader?: any;
  complianceDetails?: ComplianceDetailModel;
}

const ComplianceDetail = (props: ComplianceDetailProps) => {
  const { tableHeader, complianceDetails } = props;
  const [activeKey, setActiveKey] = useState();
  const [complianceDetailsExpand, setComplianceDetailsExpand] = useState(true);
  const [evidenceExpand, setEvidenceExpand] = useState(true);
  const receivedDate = moment(complianceDetails?.receivedDate).isValid() ? moment(complianceDetails?.receivedDate) : undefined
  const asAtDate = moment(complianceDetails?.asAtDate).isValid() ? moment(complianceDetails?.asAtDate) : undefined
  const extensionDate = moment(complianceDetails?.extensionDate).isValid() ? moment(complianceDetails?.extensionDate) : undefined
  const letterOfWaiverSent = moment(complianceDetails?.letterOfWaiverSent).isValid() ? moment(complianceDetails?.letterOfWaiverSent) : undefined
  const letterOfNonWaiverSent = moment(complianceDetails?.letterOfNonWaiverSent).isValid() ? moment(complianceDetails?.letterOfNonWaiverSent) : undefined

  const hanldeOnChangeDatePicker = function (date, dateString) {
    console.log(date);
  };
  const hanldeOnChecked = function () { };

  const hanldeCollapExpandComplianceDetails = function () {
    setComplianceDetailsExpand(!complianceDetailsExpand);
  };

  const hanldeCollapExpandEvidence = function () {
    setEvidenceExpand(!evidenceExpand);
  };

  const listCheckBox = [
    {
      id: 1,
      label: "Action Plan Created",
      defaultChecked: complianceDetails?.actionPlanCreated,
      disabled: true
    },
  ];

  if (!complianceDetails) {
    return <></>;
  }

  return (
    <>
      <div className="upcoming-tasks-wrapper-custom upcoming-tasks-wrapper-2 flex-layout space-between">
        <div className="upcoming-tasks-table-custom">
          <div className="upcoming-tasks-filter-wrapper flex-layout space-between flex-center">
            <div className="compliance-detail__header__title">
              Compliance
              <span className="covenant-detail__header__title__id">
                &nbsp;{complianceDetails?.complianceId || ''}
              </span>
            </div>
            <div className="compliance-detail__header">
              <div className="covenant-detail__header__action right-slash">
                <CVXIconButton icon={<CheckOutlined color={"white"} />} />
                <div className="covenant-detail__header__action__title">
                  Finalise
                </div>
              </div>
              <div className="covenant-detail__header__action right-slash">
                <CVXIconButton
                  icon={<VerticalAlignBottomOutlined color={"white"} />}
                />
                <div className="covenant-detail__header__action__title">
                  Save
                </div>
              </div>
              <div className="covenant-detail__header__action">
                <CVXIconButton
                  icon={<CloseCircleOutlined color={"white"} />}
                />
                <div className="covenant-detail__header__action__title">
                  Cancel
                </div>
              </div>
            </div>
          </div>
          <div className="workflow-detail-content">
            <CVXDivCollapseExpand
              title={"Details"}
              onClick={() => hanldeCollapExpandComplianceDetails()}
              isExpand={complianceDetailsExpand}
              content={
                <>
                  <div className="workflow-form-wrapper flex-layout">
                    <div className="app-info-box">
                      <p className="cvx__main-title font-3 margin-1 text-color-10">
                        Category
                      </p>
                      <h2 className="cvx__main-content">
                        {complianceDetails &&
                          complianceDetails.covenantType}
                      </h2>
                    </div>
                    <div className="app-info-box">
                      <p className="cvx__main-title font-3 margin-1 text-color-10">
                        Status
                      </p>
                      <h2 className="cvx__main-content">
                        {complianceDetails &&
                          complianceDetails.covenantInstanceStatus}
                      </h2>
                    </div>
                  </div>
                  <div className="workflow-form-wrapper flex-layout">
                    <div className="app-info-box">
                      <p className="cvx__main-title font-3 margin-1 text-color-10">
                        Covenant Title:
                      </p>
                      <h2 className="cvx__main-content">
                        {complianceDetails && complianceDetails.title}
                      </h2>
                    </div>
                  </div>
                  <div className="workflow-form-wrapper flex-layout">
                    <div className="app-info-box">
                      <p className="cvx__main-title font-3 margin-1 text-color-10">
                        Frequency
                      </p>
                      <h2 className="cvx__main-content">
                        {complianceDetails && complianceDetails.frequency}
                      </h2>
                    </div>
                    <div className="app-info-box">
                      <p className="cvx__main-title font-3 margin-1 text-color-10">
                        Due Date
                      </p>
                      <h2 className="cvx__main-content">{complianceDetails?.dueDate ? moment(complianceDetails.dueDate).format(DATE_FORMAT) : ''}</h2>
                    </div>
                  </div>
                  <div className="workflow-form-wrapper flex-layout">
                    <div className="app-info-box">
                      <p className="cvx__main-title font-3 margin-1 text-color-10">
                        Report within (days)
                      </p>
                      <h2 className="cvx__main-content">
                        {complianceDetails &&
                          complianceDetails.reportWithin}
                      </h2>
                    </div>
                  </div>
                  {/* <p className="cvx__main-title font-3 mb-2 text-color-10">
                    Description
                  </p> */}
                  <div className="compliance-detail__description">
                    <CVXTextArea
                      id={"description"}
                      title={"description"}
                      rows={3}
                      disabled={true}
                      value={complianceDetails?.description}
                    />
                  </div>
                  <div className="cvx-col-2">
                    <CVXSelectBoxWithTitle
                      title={"Compliance Status"}
                      disabled={true}
                      options={[
                        { id: 1, value: "A", label: `${complianceDetails?.complianceStatus || ''}` },
                        { id: 2, value: "B", label: "B" },
                        { id: 3, value: "3", label: "3" },
                      ]}
                      defaultValue={"A"}
                    />
                    <CVXDatePicker
                      id={"receiveddate"}
                      disabled={true}
                      title={"RECIVED DATE"}
                      placeholder={"Click on icon to enter date"}
                      onChange={hanldeOnChangeDatePicker}
                      value={receivedDate}
                    />
                  </div>
                  <div className="workflow-form-wrapper flex-layout">
                    <CVXCheckBoxList
                      data={listCheckBox}
                      onChange={hanldeOnChecked}
                    />
                    <div className="flex-grow-1">
                      <div className="app-info-input-wrapper-check-box"></div>
                    </div>
                  </div>
                  <div className="workflow-form-wrapper flex-layout">
                    <CVXTextArea
                      id={"notes"}
                      title={"Action Plan"}
                      rows={2}
                      disabled={true}
                      value={complianceDetails?.actionPlan || ''}
                    />
                  </div>
                  <div className="cvx-col-2">
                    <CVXDatePicker
                      id={"asatdate"}
                      title={"As At Date"}
                      placeholder={"Click on icon to enter date"}
                      disabled={true}
                      onChange={hanldeOnChangeDatePicker}
                      value={asAtDate}
                    />

                    <CVXDatePicker
                      id={"extensiondate"}
                      title={"Extension Date"}
                      placeholder={"Click on icon to enter date"}
                      disabled={true}
                      onChange={hanldeOnChangeDatePicker}
                      value={extensionDate}
                    />
                  </div>
                  <div className="cvx-col-2">
                    <CVXDatePicker
                      id={"waiverlatterdate"}
                      title={"Waiver Latter Date"}
                      placeholder={"Click on icon to enter date"}
                      disabled={true}
                      onChange={hanldeOnChangeDatePicker}
                      value={letterOfWaiverSent}
                    />
                    <CVXDatePicker
                      id={"nonwaiverlatterdate"}
                      title={"Non Waiver Latter Date"}
                      placeholder={"Click on icon to enter date"}
                      disabled={true}
                      onChange={hanldeOnChangeDatePicker}
                      value={letterOfNonWaiverSent}
                    />
                  </div>
                  <div className="flex-layout">
                    <p className="cvx__main-title font-3 mb-2 text-color-10">
                      Notes
                    </p>
                    <CVXTextArea
                      id={"notes"}
                      title={"Non-Waiver Letter isued"}
                      rows={3}
                      disabled={true}
                      value={complianceDetails?.note}
                    />
                  </div>
                </>
              }
            />
          </div>
          <div className="workflow-detail-content">
            <CVXDivCollapseExpand
              title={"Evidence"}
              onClick={() => hanldeCollapExpandEvidence()}
              isExpand={evidenceExpand}
              content={
                <>
                  <div className="workflow-detail-content-padding-top">
                    <form action="/" className="next-stage-workflow-form">
                      <div className="covenent-detail__upload-file">
                        <div className="covenent-detail__upload-file__input">
                          <CVXUploadInput disabled={true} />
                        </div>
                        <button
                          type="submit"
                          disabled
                          className="covenent-detail__upload-file__button"
                        >
                          UPLOAD
                        </button>
                      </div>
                      <p className="p-text-warning">
                        Allowed file types:pdf, docs, xls, xlsx, ppt, ppts,
                        jpg,jpeg, png, tif,bmp. Allowed file size: 10 MB.
                      </p>
                    </form>
                    <div className="upcoming-tasks-table-wrapper-no-padding table-wrapper-1 time-log-table">
                      <table className="custom-table">
                        <tbody>
                          <CVXTableHeader
                            data={tableHeader}
                            widthPercentages={[10, 30, 20, 20, 20, 20, 20]}
                          />
                          {FAKE_DATA_WITH_ADDITION_DETAILS.map((item) => (
                            <CVXTableRow
                              data={item}
                              activeKey={""}
                              onSelect={() => { }}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplianceDetail;
