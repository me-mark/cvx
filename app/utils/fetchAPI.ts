import axios, { Method } from 'axios';
import { notification } from 'antd';
import { TOKEN_KEY } from 'containers/App/constants';

interface Props {
  method: Method;
  url: string;
  params?: any;
  data?: any;
  formData?: boolean;
}

export const JsonToFormData = (object: JSON) => {
  const formData = new FormData();
  Object.keys(object).filter(key => object[key] !== undefined && object[key] !== null).map(key => formData.append(key, object[key]));
  return formData;
};

export const fetchAPI = async (props: Props) => {
  const { method, url, params, data, formData } = props;
  const token = localStorage.getItem(TOKEN_KEY);

  try {
    let headers = {
      'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    }
    if (token) {
      headers['authorization'] = `Bearer ${token}`;
    }
    const response = await axios({ method, url, params, data, headers, validateStatus: () => true});
    if (response.data.data) {
      return response.data.data;
    }
    // PUT success response
    if (response.data.message === "success") {
      return {};
    }
    if (response.data.error) {
      if (response.data.message) {
        notification.open({
          type: "error",
          message: 'Error',
          description: response.data.message,
        });
      } else {
        notification.open({
          type: "error",
          message: 'Error',
          description: 'Hệ thống xảy ra lỗi',
        });
      }
      return undefined;
    }
  } catch (e) {
    notification.open({
      type: "error",
      message: 'API Error',
      description: e.message,
    });
  }
};


export const replaceUrl = (url, data) => {
  const regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');

  return url.replace(regex, (m, $1) => data[$1] || m);
};
