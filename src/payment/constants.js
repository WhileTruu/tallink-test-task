const withPrefix = name => `@payment/${name}`

export const GET_ONLINE_BANK_INFORMATION = withPrefix('GET_ONLINE_BANK_INFORMATION')
export const GET_ONLINE_BANK_INFORMATION_SUCCESS = withPrefix('GET_ONLINE_BANK_INFORMATION_SUCCESS')
export const GET_ONLINE_BANK_INFORMATION_ERROR = withPrefix('GET_ONLINE_BANK_INFORMATION_ERROR')
export const MAKE_PAYMENT = withPrefix('MAKE_PAYMENT')
export const MAKE_PAYMENT_SUCCESS = withPrefix('MAKE_PAYMENT_SUCCESS')
export const MAKE_PAYMENT_ERROR = withPrefix('MAKE_PAYMENT_ERROR')
