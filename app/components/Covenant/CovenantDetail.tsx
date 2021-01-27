import "./CovenantDetail.scss";
import React from "react";
import moment from 'moment';
import {
  CheckOutlined,
  VerticalAlignBottomOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { CVXIconButton, CVXTextArea, CVXSelectBoxWithTitle } from "components/common";
import { CovenantModel } from "containers/Covenant/covenantTypes";
import { DATE_FORMAT } from "utils/constants";

interface CovenantDetailProps {
  tableHeader?: any;
  covenantDetails?: CovenantModel;
}

export const CovenantDetail = (props: CovenantDetailProps) => {
  const { covenantDetails } = props;

  return (
    <>
      <div className="upcoming-tasks-wrapper-custom upcoming-tasks-wrapper-2 flex-layout space-between">
        <div className="upcoming-tasks-table-custom">
          <div className="upcoming-tasks-filter-wrapper flex-layout space-between flex-center">
            <div className="covenant-detail__header__title">
              Covenant:
              <span className="covenant-detail__header__title__id">
                &nbsp;{covenantDetails && covenantDetails.covenantId}
              </span>
            </div>
            <div className="covenant-detail__header">
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
          <div className="workflow-detail-content-covenant-detail">
            <div className="workflow-form-wrapper flex-layout">
              <div className="app-info-box">
                <p className="cvx__main-title font-3 margin-1 text-color-10">
                  Category:
                </p>
                <h2 className="cvx__main-content">
                  {covenantDetails && covenantDetails.covenantType}
                </h2>
              </div>
              <div className="app-info-box">
                <p className="cvx__main-title font-3 margin-1 text-color-10">
                  Status
                </p>
                <h2 className="cvx__main-content">
                  {covenantDetails && covenantDetails.status}
                </h2>
              </div>
            </div>
            <div className="workflow-form-wrapper flex-layout">
              <div className="app-info-box">
                <p className="cvx__main-title font-3 margin-1 text-color-10">
                  Covenant Title:
                </p>
                <h2 className="cvx__main-content">
                  {covenantDetails && covenantDetails.title}
                </h2>
              </div>
              <div className="app-info-box">
                <p className="cvx__main-title font-3 margin-1 text-color-10">
                  Frequency
                </p>
                <h2 className="cvx__main-content">
                  {covenantDetails && covenantDetails.frequency}
                </h2>
              </div>
            </div>
            <div className="workflow-form-wrapper flex-layout">
              <div className="app-info-box">
                <p className="cvx__main-title font-3 margin-1 text-color-10">
                  Expriry Date:
                </p>
                <h2 className="cvx__main-content">{moment(covenantDetails?.expiredDate).format(DATE_FORMAT)}</h2>
              </div>
              <div className="app-info-box">
                <CVXSelectBoxWithTitle
                  disabled={true}
                  title="report within (days):"
                  options={[
                    { id: 1, value: 7, label: `${covenantDetails?.reportWithinDays} days` },
                    { id: 2, value: 14, label: "14 days" },
                    { id: 3, value: 21, label: "21 days" },
                  ]}
                  defaultValue={7}
                />
              </div>
              <div className="app-info-box"></div>
            </div>
            <div className="workflow-form-wrapper flex-layout">
              <CVXTextArea
                id={"description"}
                title={"description"}
                rows={3}
                disabled={true}
                value={covenantDetails?.description}
              />
            </div>
            <div className="workflow-form-wrapper flex-layout">
              <CVXTextArea
                id={"notes"}
                title={"notes"}
                rows={2}
                disabled={true}
              />
            </div>
            {/* <div className="cvx-col-2">
              <CVXDatePicker
                id={"receiveddate"}
                disabled={true}
                title={"RECIVED DATE"}
                placeholder={"Click on icon to enter date"}
                onChange={hanldeOnChangeDatePicker}
              />
              <CVXCheckBoxList data={listCheckBox} onChange={hanldeOnChecked} />
            </div>
            <div className="cvx-col-2">
              <CVXDatePicker
                id={"asatdate"}
                title={"As At Date"}
                placeholder={"Click on icon to enter date"}
                disabled={true}
                onChange={hanldeOnChangeDatePicker}
              // defaultValue={covenantDetails && covenantDetails.asAtDate}
              />
              <CVXDatePicker
                id={"extensiondate"}
                title={"Extension Date"}
                placeholder={"Click on icon to enter date"}
                disabled={true}
                onChange={hanldeOnChangeDatePicker}
              />
            </div>
            <div className="cvx-col-2">
              <CVXDatePicker
                id={"waiverlatterdate"}
                title={"Waiver Latter Date"}
                placeholder={"Click on icon to enter date"}
                disabled={true}
                onChange={hanldeOnChangeDatePicker}
              />

              <CVXDatePicker
                id={"non waiverlatterdate"}
                title={"Non Waiver Latter Date"}
                placeholder={"Click on icon to enter date"}
                disabled={true}
                onChange={hanldeOnChangeDatePicker}
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="upcoming-tasks-wrapper-custom upcoming-tasks-wrapper-2 flex-layout space-between">
        <div className="upcoming-tasks-table-custom">
          <h2 className="title-2 text-color-6 margin-2 cvx__main-title-2">Upload Document</h2>
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
                Allowed file types:pdf, docs, xls, xlsx, ppt, ppts, jpg,jpeg,
                png, tif,bmp. Allowed file size: 10 MB.
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
        </div>
      </div>
    */}
    </>
  );
};
