import './DashboardPage.scss';
import React from 'react';
import { NotificationList, PromotionList, SummaryList, TaskList } from '../../components';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import dashboardReducer from './dashboardReducer';
import dashboardSaga from './dashboardSaga';

const DashboardPage = () => {
	useInjectReducer({ key: "dashboard", reducer: dashboardReducer });
  useInjectSaga({ key: "dashboard", saga: dashboardSaga });
	return (
		<div className="dashboard-page-wrapper">
			<div className="dashboard">
				<SummaryList />
				<TaskList />
				<PromotionList />
				<NotificationList />
			</div>
		</div>
	)
}

export default DashboardPage;