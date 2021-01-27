import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './complianceReducer';

/**
 * Direct selector to the addCompliance state domain
 */

const selectCompliance = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Compliance
 */

const makeSelectCompliance = () =>
  createSelector(selectCompliance, substate => substate.compliance);

export default makeSelectCompliance;
export { selectCompliance };
