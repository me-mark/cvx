import { AgGroupModel, CustomerInfoModel, UserInfoModel } from "containers/Login/loginTypes";
import globalKeys from "types/globalKeys"
import { getNoKeyInLocalStorageMessageErrorByKey } from "./errorMesseges";

export const getLocalStorageCustomerInfo = (): CustomerInfoModel | undefined => {
  const customerInfoString = localStorage.getItem(globalKeys.CUSTOMER_INFO_KEY);
  if (customerInfoString) {
    return JSON.parse(customerInfoString);
  }
  throw getNoKeyInLocalStorageMessageErrorByKey(globalKeys.CUSTOMER_INFO_KEY);
}

export const getLocalStorageAgGroupInfo = (): AgGroupModel | undefined => {
  const agGroupInfoString = localStorage.getItem(globalKeys.AGGROUP_INFO_KEY);
  if (agGroupInfoString) {
    return JSON.parse(agGroupInfoString);
  }
  throw getNoKeyInLocalStorageMessageErrorByKey(globalKeys.AGGROUP_INFO_KEY);
}

export const getLocalStorageUserInfo = (): UserInfoModel | undefined => {
  const userInfoString = localStorage.getItem(globalKeys.USER_INFO_KEY);
  if (userInfoString) {
    return JSON.parse(userInfoString);
  }
  throw getNoKeyInLocalStorageMessageErrorByKey(globalKeys.USER_INFO_KEY);
}