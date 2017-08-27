import {
  GET_ONLINE_BANK_INFORMATION,
  GET_ONLINE_BANK_INFORMATION_SUCCESS,
  GET_ONLINE_BANK_INFORMATION_ERROR,
  MAKE_PAYMENT,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
} from './constants'

const initialState = {
  isLoading: false,
  banks: null,
  error: null,
}

export default function payment(state = initialState, action) {
  switch (action.type) {
    case MAKE_PAYMENT:
      return {
        ...state,
        isLoading: true,
      }
    case MAKE_PAYMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case MAKE_PAYMENT_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    case GET_ONLINE_BANK_INFORMATION:
      return {
        isLoading: true,
        banks: null,
        error: null,
      }
    case GET_ONLINE_BANK_INFORMATION_SUCCESS:
      return {
        isLoading: false,
        banks: action.banks,
        error: null,
      }
    case GET_ONLINE_BANK_INFORMATION_ERROR:
      return {
        isLoading: false,
        banks: null,
        error: action.error,
      }
    default:
      return state
  }
}
