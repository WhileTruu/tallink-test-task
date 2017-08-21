import React from 'react';

export default ({ banks, pay }) =>
  <div className="text-left col-12 py-4">
    <form>
      <fieldset class="form-group">
        <legend>Online banks</legend>
        {banks &&
          banks.map((bank, index) =>
            <div className="form-check" key={bank.name}>
              <input
                className="form-check-input ml-0"
                type="radio"
                id={`bankChoice${index}`}
                name="bank"
                value={bank.name}
              />
              <label htmlFor={`bankChoice${index}`} className="form-check-label">
                {bank.name}
              </label>
            </div>
          )}
      </fieldset>
      <div className="text-center">
        <button
          className="btn btn-primary btn-shadow"
          type="submit"
          onClick={event => {
            event.preventDefault();
            pay();
          }}
        >
          Pay
        </button>
      </div>
    </form>
  </div>;
