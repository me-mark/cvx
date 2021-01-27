import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './covenantReducer';

/**
 * Direct selector to the addCovenant state domain
 */

const selectCovenantDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Covenant
 */

const makeSelectCovenant = () =>
  createSelector(selectCovenantDomain, substate => substate.covenant);

export default makeSelectCovenant;
export { selectCovenantDomain };
