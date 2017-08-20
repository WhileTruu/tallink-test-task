import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

import './CreditcardForm.css';

const CardNumberInput = () =>
  <div className="">
    <input
      className="top"
      style={{ width: '100%', boxSizing: 'border-box' }}
      tabIndex="1"
      id="card_number"
      type="tel"
      spellCheck="off"
      autoCapitalize="off"
      placeholder="Card number"
    />
  </div>;

export const CardExpiresInput = ({ changeExpiry, expiry }) =>
  <div className="ttt-card-expiry-input-container">
    <input
      tabIndex="1"
      className="bottom left ttt-card-expiry-input"
      id="cc-exp"
      type="tel"
      value={expiry || ''}
      onChange={event => changeExpiry(event.target.value)}
      autoCorrect="off"
      spellCheck="off"
      autoCapitalize="off"
      placeholder="MM / YY"
    />
  </div>;

export const CardCVCInput = ({ changeCVC, CVC }) =>
  <div className="ttt-card-cvc-input-container">
    <input
      tabIndex="1"
      className="bottom right ttt-card-cvc-input"
      id="cc-csc"
      type="tel"
      value={CVC || ''}
      onChange={event => changeCVC(event.target.value)}
      autoComplete="off"
      autoCorrect="off"
      spellCheck="off"
      autoCapitalize="off"
      placeholder="CVC"
      maxLength="4"
    />
  </div>;

export const CreditcardForm = ({ changeCVC, CVC, changeExpiry, expiry }) =>
  <div>
    <div className="content">
      <div className="">
        <div className="">
          <div className="form-group">
            <CardNumberInput />
            <CardExpiresInput changeExpiry={changeExpiry} expiry={expiry} />
            <CardCVCInput changeCVC={changeCVC} CVC={CVC} />
          </div>
        </div>
      </div>
    </div>

    <div className="text-center">
      <button className="btn-default" type="submit">
        Pay
      </button>
    </div>
  </div>;

const mapStoreToProps = store => ({
  CVC: store.creditcardForm.CVC,
  expiry: store.creditcardForm.expiry
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeCVC: actions.changeCVC,
      changeExpiry: actions.changeExpiry
    },
    dispatch
  );

export default connect(mapStoreToProps, mapDispatchToProps)(CreditcardForm);
