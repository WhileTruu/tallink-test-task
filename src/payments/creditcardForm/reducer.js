import { CHANGE_CVC, CHANGE_EXPIRY, CHANGE_CREDITCARD_NUMBER } from './constants';

const initialState = {
  CVC: null,
  expiry: null,
  creditcardNumber: null
};

export default function getOnlineBankInformation(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CVC:
      return {
        ...state,
        CVC: action.CVC
      };
    case CHANGE_EXPIRY:
      return {
        ...state,
        expiry: action.expiry
      };
    case CHANGE_CREDITCARD_NUMBER:
      return {
        ...state,
        creditcardNumber: action.creditcardNumber
      };
    default:
      return state;
  }
}
