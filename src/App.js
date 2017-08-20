import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from './common/header';
import NotFound from './common/notFound';

import Payments from './payments';

import './App.css';

const Home = ({ match }) =>
  <div>
    <p className="ttt-intro">Welcome to the Tallink test task</p>
    <button>payments</button>
    <Link to={`${match.url}payment`}> payments </Link>
  </div>;

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
