import { CHANGE_CVC } from './constants';

export function changeCVC(value) {
  return dispatch => {
    dispatch({ type: CHANGE_CVC, CVC: reFormatCVC(value) });
  };
}

function reFormatCVC(value) {
  return value.replace(/\D/g, '').slice(0, 4);
}
