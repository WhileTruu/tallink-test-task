import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Confirmation from './confirmation'
import Payment from '../payment'

import './ReservationPage.css'

export const ReservationPage = ({ match, history, reservationId }) =>
  (<div
    className={`ttt-reservation-page ${history.location.pathname.includes('confirmed')
      ? 'bg-white'
      : 'bg-blue'}`}
  >
    <div className="content-column">
      <Switch>
        <Route path={'/reservation/:id/confirmed'}>
          <Confirmation />
        </Route>

        <Route path="/reservation/:id">
          <Payment match={match} history={history} />
        </Route>
        { reservationId
          ? <Redirect from="/reservation" to={`/reservation/${reservationId}/onlinebanks`} />
          : <Redirect to="/404" /> }
      </Switch>
    </div>
  </div>)

const mapStoreToProps = store => ({
  reservationId: store.reservation.reservationId,
})

export default connect(mapStoreToProps)(ReservationPage)
