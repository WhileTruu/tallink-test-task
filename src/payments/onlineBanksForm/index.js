import React from 'react';

import './OnlineBanksForm.css';

export default ({ banks }) =>
  <div className="ttt-online-banks-form text-left">
    <form>
      <div className="ttt-online-banks">
        {banks &&
          banks.map((bank, index) =>
            <div className="form-group" key={bank.name}>
              <input
                className="ttt-online-banks-form radio-button"
                type="radio"
                id={`bankChoice${index}`}
                name="bank"
                value={bank.name}
              />
              <label htmlFor={`bankChoice${index}`}>
                {bank.name}
              </label>
            </div>
          )}
      </div>
      <div className="text-center">
        <button className="btn-default" type="submit">
          Pay
        </button>
      </div>
    </form>
  </div>;
