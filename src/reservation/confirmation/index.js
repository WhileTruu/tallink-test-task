import React from 'react'

import Alert from '../../common/alert'

export default () =>
  (<div>
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
                  <h5 className="text-muted">You paid with a credit card</h5>
                  <h5 className="text-muted">25.6.2012 kl 10:12</h5>
                </div>
                <div className="col-4">
                  <h1>252€</h1>
                </div>
              </div>
            </div>
            <div className="card-block">
              <h5>
                Reservation number: <strong>12345678</strong>
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
                spellCheck="off"
                autoCapitalize="off"
                placeholder="Email"
              />
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary btn-shadow mt-3"
                type="submit"
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
  </div>)
