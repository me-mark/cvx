import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './SOPReducer';

/**
 * Direct selector to the SOP state domain
 */

const selectSOP = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SOP
 */
// @ts-ignore
const makeSelectSOP = () => createSelector(selectSOP, substate => substate.sop);

export default makeSelectSOP;
export { selectSOP };
