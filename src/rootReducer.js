import { combineReducers } from 'redux';
import { reducer as payments } from './payments';
import { reducer as creditcardForm } from './payments/creditcardForm';
export default combineReducers({ payments, creditcardForm });
