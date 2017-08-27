import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './actions'

const OnlineBanksForm = ({ banks, pay, isLoading, changeSelectedBank, selectedBankName }) =>
  (<div className="text-left col-12 py-4">
    <form>
      <fieldset className="form-group">
        <legend>Online banks</legend>
        { banks &&
          banks.map((bank, index) =>
            (<div className="form-check" key={bank.name}>
              <input
                className="form-check-input ml-0"
                type="radio"
                id={`bankChoice${index}`}
                name="bank"
                checked={selectedBankName === bank.name}
                onClick={() => changeSelectedBank(bank.name)}
                value={bank.name}
              />
              <label htmlFor={`bankChoice${index}`} className="form-check-label">
                { bank.name }
              </label>
            </div>),
          ) }
      </fieldset>
      <div className="text-center">
        <button
          className={`btn btn-primary btn-shadow ${isLoading ? 'disabled' : ''}`}
          type="submit"
          disabled={isLoading}
          onClick={(event) => {
            event.preventDefault()
            pay()
          }}
        >
          { isLoading ? 'Loading...' : 'Pay' }
        </button>
      </div>
    </form>
  </div>)

const mapStoreToProps = store => ({
  selectedBankName: store.onlineBanksForm.bankName,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeSelectedBank: actions.changeSelectedBank,
    },
    dispatch,
  )

export default connect(mapStoreToProps, mapDispatchToProps)(OnlineBanksForm)
