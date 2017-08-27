import React from 'react'
import { connect } from 'react-redux'

import Alert from '../../common/alert'
import { CREDITCARD, ONLINE_BANKS } from '../../payment/constants'

const Confirmation = ({ reservationId, paymentMethod }) => {
  const date = new Date()
  const formattedReservationTime = `${date.getDate()}.${date.getMonth() +
    1}.${date.getFullYear()} kl ${date.getHours()}:${date.getMinutes()}`
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <Alert>
              <strong>THANK YOU</strong>
            </Alert>
          </div>
        </div>
      </div>
      <h4>RESERVATION CONFIRMATION</h4>
      <p>
        The reservation has been paid for<br />
        We wish you a pleasant voyage!
      </p>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="card card-outline-primary">
              <div className="card-block" style={{ borderBottom: 'dashed' }}>
                <div className="row">
                  <div className="col-8 text-left">
                    { paymentMethod &&
                      paymentMethod === CREDITCARD &&
                      <h5 className="text-muted">You paid with a credit card</h5> }
                    { paymentMethod &&
                      paymentMethod === ONLINE_BANKS &&
                      <h5 className="text-muted">You paid using an online bank</h5> }
                    <h5 className="text-muted">
                      { formattedReservationTime }
                    </h5>
                  </div>
                  <div className="col-4">
                    <h1>252€</h1>
                  </div>
                </div>
              </div>
              <div className="card-block">
                <h5>
                  Reservation number: <strong>{ reservationId }</strong>
                </h5>
                <h5>
                  Security number for self-checkin: <strong>1234</strong>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h5>Get confirmation (PDF) by email</h5>

            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  disabled
                  spellCheck="off"
                  autoCapitalize="off"
                  placeholder="Email"
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-shadow mt-3"
                  type="submit"
                  disabled
                  onClick={(event) => {
                    event.preventDefault()
                  }}
                >
                  Check In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStoreToProps = store => ({
  reservationId: store.reservation.reservationId,
  paymentMethod: store.payment.method,
})

export default connect(mapStoreToProps)(Confirmation)
