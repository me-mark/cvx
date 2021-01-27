import { CSSProperties } from 'react';
import { CheckboxProps } from "antd/lib/checkbox";
import { DatePickerProps } from "antd/lib/date-picker";
import { InputProps, TextAreaProps } from "antd/lib/input";
import { ButtonProps } from "antd/lib/button";
import { SelectProps } from "antd/lib/select";

export const nameof = <T>(name: keyof T) => name;

export interface CVXTableRowModel {
  data?: any;
  onSelect?: any;
  activeKey?: string | number;
  primaryKey?: any;
  widthPercentages?: any[];
  tdStyles?: CSSProperties[];
}

export interface CVXTableHeaderModel {
  data: any;
  widthPercentages?: any[];
  thStyles?: CSSProperties[];
}

export interface CVXTableGroupedRowModel {
  data: any;
  onClickChildRow: any;
  activeKey: string | number;
  primaryKey: any;
  widthPercentages?: any[];
  isOpenFirstGroup?: any;
  tdStyles?: CSSProperties[];
}

export interface CVXIconButtonModel {
  icon?: any;
}

export interface CVXButtonModel extends ButtonProps { }

export interface CVXCheckBoxModel extends CheckboxProps {
  label?: string;
}
export interface CVXCheckBoxListModel {
  data?: any;
  onChange: any;
}

interface AdditionDatePickerProps {
  title?: string;
}
export type CVXDatePickerModel = DatePickerProps & AdditionDatePickerProps;

export interface CVXTextAreaModel extends TextAreaProps {
  id?: any;
  title?: string;
  placeholder?: any;
  rows?: any;
  value?: any;
}

export interface CVXInpuTexttModel extends InputProps {
  name: any;
  value: any;
  placeholder: any;
  onChange: any;
}

export interface CVXInput extends InputProps { }

export interface CVXUploadInputModel {
  disabled?: boolean;
}

export interface CVXLoadingModel {
  msg?: string;
  className?: string;
  loading?: boolean;
}

export interface CVXOptionModel {
  id: string | number;
  value: string | number;
  label?: string;
}

export interface CVXSelectBoxModel extends SelectProps<any> {
  options: CVXOptionModel[];
  onChange?: any;
  width?: string | number;
  disabled?: boolean;
}

export interface CVXSelectBoxWithTitleModel extends SelectProps<any>{
  options: CVXOptionModel[];
  onChange?: any;
  width?: any;
  title?: "THIS IS TITLE" | string;
  disabled?: boolean;
}

export interface CVXTabDataModel {
  id: number | string;
  label: string;
}

export interface CVXTabModel {
  tabData: CVXTabDataModel[];
  defaultActive?: CVXTabDataModel['id'];
  onClickTab: (item: CVXTabDataModel) => void;
}

export interface CVXDivCollapseExpandDivModel {
  title?: any;
  onClick?: any;
  isExpand?: any;
  content?: any;
}

export interface CVXTextInputModel extends InputProps {
  title?: any,
  name?: any,
  disabled?: any,
  defaultValue?: any,
  type?: any,
  placeholder?: any,
  onChange?: any,
  maxLength?: any,
  size?: any,
  prefix?: any,
  className?: any,
  isTypePass?: any,
}

export interface CVXCardModel {
  title?: string | number,
  isActive?: boolean,
  onClick?: any,
}