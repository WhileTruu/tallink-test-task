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

const CardExpiresInput = () =>
  <div className="" style={{ width: '50%', boxSizing: 'border-box', display: 'inline-block' }}>
    <input
      style={{ width: '100%', boxSizing: 'border-box' }}
      tabIndex="1"
      className="bottom left"
      id="cc-exp"
      type="tel"
      autoCorrect="off"
      spellCheck="off"
      autoCapitalize="off"
      placeholder="MM / YY"
    />
  </div>;

export const CardCVCInput = ({ changeCVC, CVC }) =>
  <div className="" style={{ width: '50%', boxSizing: 'border-box', display: 'inline-block' }}>
    <input
      style={{ width: '100%', boxSizing: 'border-box' }}
      tabIndex="1"
      className="bottom right"
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

export const CreditcardForm = ({ changeCVC, CVC }) =>
  <div>
    <div className="content">
      <div className="">
        <div className="">
          <div className="form-group">
            <CardNumberInput />
            <CardExpiresInput />
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
  CVC: store.creditcardForm.CVC
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeCVC: actions.changeCVC
    },
    dispatch
  );

export default connect(mapStoreToProps, mapDispatchToProps)(CreditcardForm);
