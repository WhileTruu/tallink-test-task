import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PaymentMethods from './paymentMethods'
import Banner from '../common/banner'
import { getOnlineBankInformation } from './actions'

import './Payment.css'

const strings = {
  onlineBanks: 'online banks',
  creditCard: 'creditcard',
}

class Payment extends Component {
  componentDidMount() {
    this.props.getOnlineBankInformation()
  }
  render() {
    const { match, history, banks } = this.props
    const pay = () => history.push('confirmed')

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <Banner>
              <div className="row h-100">
                <div className="col-8 col-md-10 banner-content">
                  <h4 className="mb-0">CRUISE TALLINN-STOCKHOLM-TALLINN</h4>
                </div>
                <div className="col-4 col-md-2 text-right banner-content">
                  <h2 className="mb-0">252€</h2>
                </div>
              </div>
            </Banner>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="ttt-payment-methods col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <PaymentMethods
                history={history}
                match={match}
                pay={pay}
                strings={strings}
                banks={banks}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStoreToProps = store => ({
  banks: store.payment.banks,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getOnlineBankInformation,
    },
    dispatch,
  )

export default connect(mapStoreToProps, mapDispatchToProps)(Payment)
