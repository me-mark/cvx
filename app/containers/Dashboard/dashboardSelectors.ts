import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './dashboardReducer';

/**
 * Direct selector to the Dashboard state domain
 */

const selectDashboard = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Dashboard
 */
// @ts-ignore
const makeSelectDashboard = () => createSelector(selectDashboard, substate => substate.dashboard);

export default makeSelectDashboard;
export { selectDashboard };
