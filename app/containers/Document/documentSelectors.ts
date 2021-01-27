import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

import { initialState } from './documentReducer';

/**
 * Direct selector to the Document state domain
 */

const selectDocument = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Document
 */
// @ts-ignore
const makeSelectDocument = () => createSelector(selectDocument, substate => substate.document);

export default makeSelectDocument;
export { selectDocument };
