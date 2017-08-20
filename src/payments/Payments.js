import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CreditcardForm from './creditcardForm';
import OnlineBanksForm from './onlineBanksForm';
import { getOnlineBankInformation } from './actions';

import './Payments.css';

const strings = {
  onlineBanks: 'online banks',
  creditCard: 'creditcard'
};

class Payments extends Component {
  componentDidMount() {
    this.props.getOnlineBankInformation();
  }
  render() {
    const { match, history } = this.props;
    const onlineBanksTabIsActive = history.location.pathname.includes('onlinebanks');
    const creditcardTabIsActive = history.location.pathname.includes('creditcard');

    return (
      <div className="ttt-payments-page">
        <div className="ttt-payments content-column">
          <div className="tabs clearfix">
            <button
              className={`tab-link ${onlineBanksTabIsActive ? 'active' : 'inactive'}`}
              onClick={() => history.replace(`${match.url}/onlinebanks`)}
            >
              {strings.onlineBanks}
            </button>
            <button
              className={`tab-link ${creditcardTabIsActive ? 'active' : 'inactive'}`}
              onClick={() => history.replace(`${match.url}/creditcard`)}
            >
              {strings.creditCard}
            </button>
          </div>
          <div className="ttt-payment-methods">
            <Switch>
              <Route path={`${match.url}/creditcard`} component={CreditcardForm} />
              <Route path={`${match.url}/onlinebanks`}>
                <OnlineBanksForm banks={this.props.banks} />
              </Route>
              <Redirect to="/404" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => ({
  banks: store.payments.banks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getOnlineBankInformation
    },
    dispatch
  );

export default connect(mapStoreToProps, mapDispatchToProps)(Payments);
