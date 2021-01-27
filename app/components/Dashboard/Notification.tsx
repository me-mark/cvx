import './Notification.scss';
import React from 'react';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Notification = (props) => {
  const { } = props;
  return (
    <div className="dashboard__notification">
      <div className="dashboard__notification__icon">
        <FontAwesomeIcon
          icon={faCalendarCheck}
          color="#70abbb"
        />
      </div>
      <div className="dashboard__notification__title">New Terms update</div>
      <div className="dashboard__notification__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis felis elit, vitae vehicula odio pharetra vitae. Etiam id lacinia odio, a iaculis ipsum. Sed congue, enim vitae vestibulum suscipit, libero urna suscipit augue, ut interdum quam ligula nec dolor. Quisque nec sapien eu libero sodales sodales eu quis metus.
      </div>
    </div>
  )
}