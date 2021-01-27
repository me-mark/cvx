/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 */

export const TOKEN_KEY = 'CVX_TOKEN';
export const USER_INFO_KEY = 'CVX_USER_INFO';
export const API_COMMON_ERROR_MESSAGE =
  'There is some error. Please try again!';
export const NO_KEY_AVAILABLE_LOCAL_STORAGE_ERROR_MESSAGE = (key: string) => `There is no ${key} in localStorage`;

export enum SEARCH_PARAM_KEYS {
  'APPLICATION_ID' = 'applicantId',
  'SUB_TAB' = 'subtab',
}

export enum UNDEFINED_KEYS {
  'UNDEFINED_ID' = -1
}

export enum SOP_SUBTAB_LABELS {
  'Assets' = 'Assets',
  'Liabilities' = 'Liabilities',
  'Income' = 'Income',
  'Expenses' = 'Expenses',
}

export const SOP_SUBTABS = [
  {
    id: 0,
    label: SOP_SUBTAB_LABELS.Assets
  },
  {
    id: 1,
    label: SOP_SUBTAB_LABELS.Liabilities
  },
  {
    id: 2,
    label: SOP_SUBTAB_LABELS.Income
  },
  {
    id: 3,
    label: SOP_SUBTAB_LABELS.Expenses
  },
]