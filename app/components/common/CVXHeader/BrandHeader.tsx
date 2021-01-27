import iconTurnOff from '../../../images/icon-turn-off.svg';
import iconSetting from '../../../images/icon-setting.svg';
import logo from '../../../images/logo_tnb.png';
import "./header.scss";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { useHistory } from "react-router-dom";
import { PathKeys } from "types";
import { createStructuredSelector } from "reselect";
import makeSelectLogin from "containers/Login/loginSelectors";
import { logout } from "containers/Login/loginActions";
import { RoutePaths } from 'containers/App/routes';

const loginSelector = createStructuredSelector({
  login: makeSelectLogin(),
});

export const BrandHeader = () => {
  const dispatch = useDispatch();
  const [openLogoutConfirm, toggleLogoutConfirm] = useState(false);
  const history = useHistory();
  const {
    login: { isLoggedIn, userInfo, agGroupInfo },
  } = useSelector(loginSelector);
  const handleLogoutConfirm = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!isLoggedIn) {
      toggleLogoutConfirm(false);
      history.replace(PathKeys.LOGIN);
    }
  }, [isLoggedIn]);

  if (!agGroupInfo) {
    return <></>;
  }

  return (
    <div className="brand-header-wrapper">
      <div className="brand-header-wrapper__logo" onClick={() => history.push(RoutePaths.ROOT)}>
        <img src={logo} height={'100%'}/>
      </div>
      <div className="brand-header-wrapper__group-info">
        <div></div>
        <div className="brand-header-wrapper__group-info__wrapper">
          <div className="brand-header-wrapper__group-info__title">Group Detail:</div>
          <div className="brand-header-wrapper__group-info__name">{agGroupInfo.name ? agGroupInfo.name : agGroupInfo.aggregationGroupId}</div>
        </div>
      </div>
      <div className="brand-header-wrapper__user-info">
        <div className="brand-header-wrapper__user-info__welcome">
          <div></div>
          <div className="brand-header-wrapper__user-info__welcome__text">
            Welcome
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="brand-header-wrapper__user-info__user">
          <div
            className="brand-header-wrapper__user-info__user__short-name"
          >
            PD
          </div>
          <div className="brand-header-wrapper__user-info__user__full-name">
            {userInfo?.fullName !== "" ? userInfo?.fullName : userInfo.username}
          </div>
          <div
            className="brand-header-wrapper__user-info__user__button"
            onClick={() => toggleLogoutConfirm(true)}
          >
            <img src={iconTurnOff} />
          </div>
          <div className="brand-header-wrapper__user-info__user__button">
            <img src={iconSetting} />
          </div>
        </div>
      </div>
      <Modal
        title="Log out confirm!"
        visible={openLogoutConfirm}
        onOk={handleLogoutConfirm}
        onCancel={() => toggleLogoutConfirm(false)}
        okButtonProps={{ className: "confirm-modal__ok-button" }}
        cancelButtonProps={{ className: "confirm-modal__cancel-button" }}
        okText="Log out"
      >
        Are you sure to log out?
      </Modal>
    </div>
  );
};
