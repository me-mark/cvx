import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './loginReducer';

/**
 * Direct selector to the addLogin state domain
 */

const selectAddLoginDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddLogin
 */

const makeSelectLogin = () =>
  createSelector(selectAddLoginDomain, substate => substate.login);

export default makeSelectLogin;
export { selectAddLoginDomain };
