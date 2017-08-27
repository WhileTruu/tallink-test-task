import { combineReducers } from 'redux'
import { reducer as payment } from './payment'
import { reducer as reservation } from './reservation'
import { reducer as creditcardForm } from './payment/creditcardForm'

export default combineReducers({ payment, creditcardForm, reservation })
