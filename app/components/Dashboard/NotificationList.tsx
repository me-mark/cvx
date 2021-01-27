import React from 'react';
import { CVXTitle } from 'components/common';
import { Notification } from './Notification';
export const NotificationList = () => {
  return (
    <div className="dashboard__notification-list">
      <CVXTitle title="What's New" />
      <div className="dashboard__notification-list__list">
        <Notification />
      </div>
    </div>
  )
}