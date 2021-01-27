import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from 'translations/messages';

export const validatePercent = ({ getFieldValue }) => ({
  validator(rule, value) {
    if (!value) {
      return Promise.reject(<FormattedMessage {...messages.requiredInput}/>)
    }
    const number = parseInt(value);
    if (isNaN(number)) {
      return Promise.reject(<FormattedMessage {...messages.requiredInputNumber}/>);
    } else if (number < 0) {
      return Promise.reject(<FormattedMessage {...messages.requiredInputGreaterZero}/>);
    } else if (number > 100) {
      return Promise.reject(<FormattedMessage {...messages.requiredInputNumberMax}/>);
    }
    return Promise.resolve();
  },
})
export const validatePrice = ({ getFieldValue }) => ({
  validator(rule, value) {
    if (getFieldValue('sizes').length > 1) {
      if (value) {
        const number = parseInt(value);
        if (isNaN(number)) {
          return Promise.reject(<FormattedMessage {...messages.requiredInputNumber}/>);
        } else if (number < 0) {
          return Promise.reject(<FormattedMessage {...messages.requiredInputGreaterZero}/>);
        }
      }
    }
    return Promise.resolve();
  },
})
export const validateNumberPrice = ({ getFieldValue }) => ({
  validator(rule, value) {
    if (value) {
      const number = parseInt(value);
      if (isNaN(number)) {
        return Promise.reject(<FormattedMessage {...messages.requiredInputNumber}/>);
      } else if (number < 0) {
        return Promise.reject(<FormattedMessage {...messages.requiredInputGreaterZero}/>);
      }
    }
    return Promise.resolve();
  },
})
export const validateRequiredSpace = ({ getFieldValue }, message = <FormattedMessage {...messages.requiredInput}/>) => ({
  validator(rule, value) {
    if (!value) {
      return Promise.reject(message)
    } else {
      if (value.trim() === "") {
        return Promise.reject(<FormattedMessage {...messages.requiredInput}/>);
      }
    }
    return Promise.resolve();
  },
})
export const validateMaxTime = (maxNum) => ({
  validator(rule, value) {
    if (value) {
      const number = parseInt(value);
      if (!isNaN(number)) {
        if (number > maxNum) {
          return Promise.reject(<FormattedMessage {...messages.requiredInput}/>);
        }
      }
    }
    return Promise.resolve();
  },
})

export const validateFormatNumber = ({ getFieldValue }, message) => ({
  validator(rule, value) {
    if (value) {
      const regex = new RegExp('^[0-9,]*$');
      value = value.toString();
      if (!value.match(regex)) {
        return Promise.reject(message);
      }
    }
    return Promise.resolve();
  },
})