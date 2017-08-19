const withPrefix = name => `@payments/${name}`;

export const GET_ONLINE_BANK_INFORMATION = withPrefix('GET_ONLINE_BANK_INFORMATION');
export const GET_ONLINE_BANK_INFORMATION_SUCCESS = withPrefix(
  'GET_ONLINE_BANK_INFORMATION_SUCCESS'
);
export const GET_ONLINE_BANK_INFORMATION_ERROR = withPrefix('GET_ONLINE_BANK_INFORMATION_ERROR');
