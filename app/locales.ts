export const DEFAULT_LOCALE = 'vi';

// prettier-ignore
export const appLocales = [
  'en',
  'vi'
];

// prettier-ignore
export const enTranslationMessages = {
  ...require('./translations/en.json'),
  ...require('./containers/setting/en.json'),
  /* some other modules you want */
}

// prettier-ignore
export const viTranslationMessages = {
  ...require('./translations/vi.json'),
  ...require('./containers/setting/vi.json'),
  /* some other modules you want */
}