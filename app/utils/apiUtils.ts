import cacheUtils from 'utils/cacheUtils';
import { call } from 'redux-saga/effects';
import request from 'utils/request';
export const PUBLIC_API = process.env.PUBLIC_API;
export const API_URL = `${PUBLIC_API}`;
import _ from 'lodash';
import { HTTP_STATUS_ACCEPTED } from "./constants";

function buildHeaders(
  option: any = {
    contentType: 'application/json',
    accept: 'application/json',
  },
) {
  const accessToken = cacheUtils.getAccessToken();

  const { isFormData } = option;
  if (isFormData)
    return { ...(accessToken ? { 'authorization': `Bearer ${accessToken}` } : undefined) };

  return {
    'Content-Type': option.contentType,
    Accept: option.accept,
    ...(accessToken ? { 'authorization': `Bearer ${accessToken}` } : undefined),
  };
}

function buildFormData(body: any): FormData {
  const formData = new FormData();
  _.forOwn(body, (value, key) => {
    if (value !== undefined && value !== null) {
      if (value instanceof Array) {
        for (let i = 0; i < value.length; i++) {
          formData.append(`${key}`, value[i]);
        }
      } else {
        formData.append(key, value);
      }
    }
  })
  return formData;
}

function* processApi(url, method, body, headers, option = {}) {
  // @ts-ignore
  const { isFormData } = option;
  if (isFormData) {
    const formData = buildFormData(body);
    return yield call(request, `${API_URL}${url}`, {
      method,
      headers,
      body: formData,
    });
  }
  return yield call(request, `${API_URL}${url}`, {
    method,
    headers,
    ...(method === 'GET' ? undefined : { body: JSON.stringify(body) }),
  });
}

export function* callApi(url, method, body?, option?) {
  const headers = buildHeaders(option);
  return yield processApi(url, method, body, headers, option);
}

export function success(code) {
  return code == HTTP_STATUS_ACCEPTED;
}
