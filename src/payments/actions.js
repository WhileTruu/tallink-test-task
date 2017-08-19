import {
  GET_ONLINE_BANK_INFORMATION,
  GET_ONLINE_BANK_INFORMATION_SUCCESS,
  GET_ONLINE_BANK_INFORMATION_ERROR
} from './constants';
import { api } from '../common';

export function getOnlineBankInformation() {
  return dispatch => {
    dispatch({ type: GET_ONLINE_BANK_INFORMATION });
    api
      .getOnlineBankInformation()
      .then(response => {
        dispatch({ type: GET_ONLINE_BANK_INFORMATION_SUCCESS, banks: response.banks });
      })
      .catch(error => dispatch({ type: GET_ONLINE_BANK_INFORMATION_ERROR, error }));
  };
}
