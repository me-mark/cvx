import { Search } from "history";

export const getSearchParamValue = (searchParams: Search, param) => {
  const currentUrlSearchParams = new URLSearchParams(searchParams);
  const paramValue = currentUrlSearchParams.get(param);
  if (!paramValue) {
    return '';
  }
  return paramValue;
}

export const setSearchParamValue = (searchParams: Search, param, value) => {
  const currentUrlSearchParams = new URLSearchParams(searchParams);
  currentUrlSearchParams.set(param, value);
  return currentUrlSearchParams.toString();
}