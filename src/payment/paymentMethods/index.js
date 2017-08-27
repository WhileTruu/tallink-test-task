import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import CreditcardForm from '../creditcardForm'
import OnlineBanksForm from '../onlineBanksForm'

export default ({
  pay,
  history,
  strings,
  banks,
  isLoading,
  changePaymentMethodToCreditCard,
  changePaymentMethodToOnlineBanks,
}) => {
  const onlineBanksTabIsActive = history.location.pathname.includes('onlinebanks')
  const creditcardTabIsActive = history.location.pathname.includes('creditcard')

  return (
    <div>
      <div className="tabs clearfix">
        <button
          className={`btn tab ${onlineBanksTabIsActive ? 'btn-secondary' : 'btn-primary'}`}
          onClick={() => {
            changePaymentMethodToOnlineBanks()
            history.replace('onlinebanks')
          }}
          style={{ float: 'left' }}
        >
          { strings.onlineBanks }
        </button>
        <button
          className={`btn tab ml-1 ${creditcardTabIsActive ? 'btn-secondary' : 'btn-primary'}`}
          onClick={() => {
            changePaymentMethodToCreditCard()
            history.replace('creditcard')
          }}
          style={{ float: 'left' }}
        >
          { strings.creditCard }
        </button>
      </div>
      <div className="ttt-payment-form">
        <Switch>
          <Route path="/reservation/:id/creditcard">
            <CreditcardForm pay={pay} isLoading={isLoading} />
          </Route>
          <Route path="/reservation/:id/onlinebanks">
            <OnlineBanksForm banks={banks} pay={pay} isLoading={isLoading} />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </div>
    </div>
  )
}
