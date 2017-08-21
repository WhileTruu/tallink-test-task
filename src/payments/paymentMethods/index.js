import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CreditcardForm from '../creditcardForm';
import OnlineBanksForm from '../onlineBanksForm';

export default ({ pay, history, match, strings, banks }) => {
  const onlineBanksTabIsActive = history.location.pathname.includes('onlinebanks');
  const creditcardTabIsActive = history.location.pathname.includes('creditcard');

  return (
    <div>
      <div className="tabs clearfix">
        <button
          className={`btn tab ${onlineBanksTabIsActive ? 'btn-secondary' : 'btn-primary'}`}
          onClick={() => history.replace(`${match.url}/onlinebanks`)}
          style={{ float: 'left' }}
        >
          {strings.onlineBanks}
        </button>
        <button
          className={`btn tab ml-1 ${creditcardTabIsActive ? 'btn-secondary' : 'btn-primary'}`}
          onClick={() => history.replace(`${match.url}/creditcard`)}
          style={{ float: 'left' }}
        >
          {strings.creditCard}
        </button>
      </div>
      <div className="ttt-payment-form">
        <Switch>
          <Route path={`${match.url}/creditcard`}>
            <CreditcardForm pay={pay} />
          </Route>
          <Route path={`${match.url}/onlinebanks`}>
            <OnlineBanksForm banks={banks} pay={pay} />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </div>
    </div>
  );
};
