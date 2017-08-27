import { CHANGE_SELECTED_BANK } from './constants'

// eslint-disable-next-line import/prefer-default-export
export function changeSelectedBank(bankName) {
  return { type: CHANGE_SELECTED_BANK, bankName }
}
