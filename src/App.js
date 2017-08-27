import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from './common/header'
import NotFound from './common/notFound'

import ReservationPage from './reservation'

import './App.css'

const App = () =>
  (<Router>
    <div className="ttt">
      <Header />
      <Switch>
        <Route path="/reservation" component={ReservationPage} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/" to="/reservation" />
        <Redirect to="/404" />
      </Switch>
    </div>
  </Router>)

export default App
