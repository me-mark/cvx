import React from "react";
import { Form, notification } from "antd";
import {
  KeyOutlined,
  UserOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./LoginForm.scss";
import { CVXTextInput, CVXCheckBoxList } from "components/common";

const listCheckBox = [
  {
    id: 1,
    label: "Remember me",
    defaultChecked: true,
  },
];

const LoginForm = ({
  loginInfo,
  handleLogin,
  handleFieldChange,
  hanldeRemember,
}) => {
  const { t } = useTranslation();
  const onSubmit = () => {
    if (handleLogin) {
      handleLogin(loginInfo);
    }
  };

  return (
    <div className="login-content">
      <Form className="login-content__form" onFinish={onSubmit}>
        <Form.Item>
          <div className="login-content__form__input-wrapper">
            <div className="w-100">
              <CVXTextInput
                name={"username"}
                className="login-content__form__input"
                title={"UserName"}
                prefix={<UserOutlined />}
                maxLength={50}
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="login-content__form__input-wrapper">
            <div className="w-100">
              <CVXTextInput
                name={"password"}
                className="login-content__form__input"
                title={"PassWord"}
                prefix={<KeyOutlined />}
                isTypePass={true}
                maxLength={20}
                onChange={handleFieldChange}
              />
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <div className="login-content__form__third-part">
            <div className="login-content__form__third-part__remember-me">
              <CVXCheckBoxList data={listCheckBox} onChange={hanldeRemember} />
            </div>
            <div className="login-content__form__third-part__forgot-password">
              <a
                className="login-content__form__third-part__forgot-password__text"
                href="#"
              >
                Forget password?
              </a>
              <span className="login-content__form__third-part__forgot-password__icon">
                <ArrowRightOutlined
                  style={{ fontSize: "15px", color: "#000" }}
                />
              </span>
            </div>
          </div>
        </Form.Item>
        <Form.Item>
          <button
            type="submit"
            className="login-content__form__button"
          >
            LOGIN
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
