import {EMAIL_CHANGED } from './types';

/*
add functions like the one below-->

export const alertNotify = (text) => {
  return {
    type: ALERT_MESSAGE,
    payload: text
  };
};*/

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
