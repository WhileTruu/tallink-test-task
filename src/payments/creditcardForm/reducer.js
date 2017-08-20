import { CHANGE_CVC } from './constants';

const initialState = {
  CVC: null
};

export default function getOnlineBankInformation(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CVC:
      return {
        CVC: action.CVC
      };
    default:
      return state;
  }
}
