import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';

export const CardNumberInput = ({ changeCreditcardNumber, creditcardNumber }) =>
  <input
    className="form-control"
    tabIndex="1"
    id="cc-number"
    type="tel"
    value={creditcardNumber || ''}
    onChange={event => changeCreditcardNumber(event.target.value)}
    spellCheck="off"
    autoCapitalize="off"
    placeholder="Card number"
  />;

export const CardExpiresInput = ({ changeExpiry, expiry }) =>
  <div className="">
    <input
      tabIndex="1"
      className="form-control"
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
  <input
    tabIndex="1"
    className="form-control"
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
  />;

export const CreditcardForm = ({
  changeCVC,
  CVC,
  changeExpiry,
  expiry,
  changeCreditcardNumber,
  creditcardNumber
}) =>
  <div className="col-12 py-4 text-left">
    <form>
      <legend>Creditcard</legend>

      <div className="form-group">
        <CardNumberInput
          changeCreditcardNumber={changeCreditcardNumber}
          creditcardNumber={creditcardNumber}
        />
      </div>
      <div className="form-group row">
        <div className="col-6 pr-2">
          <CardExpiresInput changeExpiry={changeExpiry} expiry={expiry} />
        </div>
        <div className="col-6 pl-2">
          <CardCVCInput changeCVC={changeCVC} CVC={CVC} />
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-shadow" type="submit">
          Pay
        </button>
      </div>
    </form>
  </div>;

const mapStoreToProps = store => ({
  creditcardNumber: store.creditcardForm.creditcardNumber,
  CVC: store.creditcardForm.CVC,
  expiry: store.creditcardForm.expiry
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeCVC: actions.changeCVC,
      changeExpiry: actions.changeExpiry,
      changeCreditcardNumber: actions.changeCreditcardNumber
    },
    dispatch
  );

export default connect(mapStoreToProps, mapDispatchToProps)(CreditcardForm);
