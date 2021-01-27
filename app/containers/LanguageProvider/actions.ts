/*
 *
 * LanguageProvider actions
 *
 */

import ActionTypes from './constants';
import { action } from 'typesafe-actions';

export const changeLocale = (languageLocale: 'vi' | 'en') =>
  action(ActionTypes.CHANGE_LOCALE, languageLocale);
