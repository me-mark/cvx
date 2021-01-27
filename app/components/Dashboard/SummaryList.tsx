import skeletonDashboardSummary from '../../images/skeleton_dashboad_summary.svg';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CVXTitle } from 'components/common';
import { PathKeys } from 'types';
import { getDashboardCovenantSummary, getDashboardDocumentSummary, getDashboardSOPSummary } from 'containers/Dashboard/dashboardActions';
import { Summary } from './Summary';
import makeSelectDashboard from 'containers/Dashboard/dashboardSelectors';
import makeSelectLogin from 'containers/Login/loginSelectors';
import { RoutePaths } from 'containers/App/routes';

const dashboardSelector = createStructuredSelector({
  dashboard: makeSelectDashboard(),
});

const loginSelector = createStructuredSelector({
  login: makeSelectLogin(),
})
export const SummaryList = () => {
  const dispatch = useDispatch();
  const {
    dashboard: { SOPSummary, covenantSummary, documentSummary },
  } = useSelector(dashboardSelector);
  const {
    login: { agGroupInfo }
  } = useSelector(loginSelector);

  useEffect(() => {
    dispatch(getDashboardSOPSummary());
    dispatch(getDashboardDocumentSummary());
  }, [])

  useEffect(() => {
    if (agGroupInfo?.aggregationGroupId) {
      dispatch(getDashboardCovenantSummary());
    }
  }, [agGroupInfo])

  if (!covenantSummary || !SOPSummary || !documentSummary) {
    return <div className="dashboard__summary-list">
      <img src={skeletonDashboardSummary} className="dashboard__summary-list__skeleton" />
    </div>
  }

  return (
    <div className="dashboard__summary-list">
      <div>
        <CVXTitle title="Covenant" />
        <Summary
          title="Upcoming Covenants"
          subTitle="Overdue Covenants"
          number={covenantSummary?.overdueCovenantCount}
          subNumber={covenantSummary?.upcomingCovenantCount}
          linkTo={PathKeys.COVENANT}
        />
      </div>
      <div>
        <CVXTitle title="Statement of Position" />
        <Summary
          title="Submitted periods"
          subTitle="Periods to complete"
          number={SOPSummary?.sopEmptyPeriodsCount}
          subNumber={SOPSummary?.sopPeriodsCount}
          linkTo={PathKeys.SOP} />
      </div>
      <div>
        <CVXTitle title="Documents" />
        <Summary
          title="Total Documents"
          subTitle="Documents to provide"
          number={documentSummary?.outstandingDocumentsCount}
          subNumber={documentSummary?.totalUploadedDocumentsCount}
          linkTo={RoutePaths.DOCUMENTS}
        />
      </div>
    </div >
  );
}