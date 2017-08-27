import {
  GET_ONLINE_BANK_INFORMATION,
  GET_ONLINE_BANK_INFORMATION_SUCCESS,
  GET_ONLINE_BANK_INFORMATION_ERROR,
  MAKE_PAYMENT,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_ERROR,
  ONLINE_BANKS,
  CREDITCARD,
  CHANGE_PAYMENT_METHOD_TO_ONLINE_BANKS,
  CHANGE_PAYMENT_METHOD_TO_CREDITCARD,
} from './constants'

const initialState = {
  isLoading: false,
  banks: null,
  error: null,
  method: ONLINE_BANKS,
}

export default function payment(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAYMENT_METHOD_TO_ONLINE_BANKS: {
      return {
        ...state,
        method: ONLINE_BANKS,
      }
    }
    case CHANGE_PAYMENT_METHOD_TO_CREDITCARD: {
      return {
        ...state,
        method: CREDITCARD,
      }
    }
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
        ...state,
        isLoading: true,
        banks: null,
        error: null,
      }
    case GET_ONLINE_BANK_INFORMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        banks: action.banks,
        error: null,
      }
    case GET_ONLINE_BANK_INFORMATION_ERROR:
      return {
        ...state,
        isLoading: false,
        banks: null,
        error: action.error,
      }
    default:
      return state
  }
}
