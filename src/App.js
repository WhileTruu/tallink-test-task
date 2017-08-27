import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './common/header';
import NotFound from './common/notFound';

import Payments from './payments';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ttt">
          <Header />
          <Switch>
            <Route path="/payment" component={Payments} />
            <Route path="/404" component={NotFound} />
            <Redirect from="/" to="/payment/onlinebanks" />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
