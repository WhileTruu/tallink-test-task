import { CHANGE_CVC, CHANGE_EXPIRY, CHANGE_CREDITCARD_NUMBER } from './constants';

/* Credit cards require much fancier checks than these simple ones provide. */

export function changeCVC(value) {
  return { type: CHANGE_CVC, CVC: formatCVC(value) };
}

function formatCVC(value) {
  return value.replace(/\D/g, '').slice(0, 4);
}

export function changeExpiry(value) {
  return { type: CHANGE_EXPIRY, expiry: formatExpiry(value) };
}

function formatExpiry(expiry) {
  const parts = expiry.match(/^(\d{1,2})(\D+)?(\d{1,4})?/);

  if (!parts) return '';
  let month = parts[1] || '';
  let separator = parts[2] || '';
  let year = parts[3] || '';
  if (year.length > 0) {
    // make sure separator is correctly spaced when year exists
    separator = ' / ';
  } else if (separator === ' /') {
    // remove separator when first letter of separator removed
    month = month.substring(0, 1);
    separator = '';
  } else if (month.length === 2 || separator.length > 0) {
    // add separator when character added after month
    separator = ' / ';
  } else if (month.length === 1 && (month !== '0' && month !== '1')) {
    // add 0 to month and a separator if month complete
    month = '0' + month;
    separator = ' / ';
  }
  if (month.length === 1 && separator.length > 0) {
    // add 0 if separator exists and month length is 1
    month = '0' + month;
  }
  return month + separator + year;
}

export function changeCreditcardNumber(value) {
  return { type: CHANGE_CREDITCARD_NUMBER, creditcardNumber: formatCreditcardNumber(value) };
}

function formatCreditcardNumber(value) {
  return value.replace(/\D/g, '').slice(0, 16);
}
