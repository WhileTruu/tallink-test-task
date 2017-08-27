import { CHANGE_SELECTED_BANK } from './constants'

const initialState = {
  bankName: null,
}

export default function onlineBanksForm(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_BANK:
      return {
        bankName: action.bankName,
      }
    default:
      return state
  }
}
