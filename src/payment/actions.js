import {
  GET_ONLINE_BANK_INFORMATION,
  GET_ONLINE_BANK_INFORMATION_SUCCESS,
  GET_ONLINE_BANK_INFORMATION_ERROR,
  MAKE_PAYMENT,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
  CHANGE_PAYMENT_METHOD_TO_ONLINE_BANKS,
  CHANGE_PAYMENT_METHOD_TO_CREDITCARD,
} from './constants'
import { api } from '../common'

// eslint-disable-next-line import/prefer-default-export
export function getOnlineBankInformation() {
  return (dispatch) => {
    dispatch({ type: GET_ONLINE_BANK_INFORMATION })
    api
      .getOnlineBankInformation()
      .then((response) => {
        dispatch({ type: GET_ONLINE_BANK_INFORMATION_SUCCESS, banks: response.banks })
      })
      .catch(error => dispatch({ type: GET_ONLINE_BANK_INFORMATION_ERROR, error }))
  }
}

export function makePayment() {
  return { type: MAKE_PAYMENT }
}

export function makePaymentSuccess() {
  return { type: MAKE_PAYMENT_SUCCESS }
}

export function makePaymentError() {
  return { type: MAKE_PAYMENT_ERROR }
}

export function changePaymentMethodToCreditCard() {
  return { type: CHANGE_PAYMENT_METHOD_TO_CREDITCARD }
}

export function changePaymentMethodToOnlineBanks() {
  return { type: CHANGE_PAYMENT_METHOD_TO_ONLINE_BANKS }
}
