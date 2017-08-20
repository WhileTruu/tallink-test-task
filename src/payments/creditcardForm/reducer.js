import { CHANGE_CVC, CHANGE_EXPIRY } from './constants';

const initialState = {
  CVC: null,
  expiry: null
};

export default function getOnlineBankInformation(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CVC:
      return {
        CVC: action.CVC,
        expiry: state.expiry
      };
    case CHANGE_EXPIRY:
      return {
        CVC: state.CVC,
        expiry: action.expiry
      };
    default:
      return state;
  }
}
