import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Top from './components/pages/Top/Top';
import Practice from './components/practice/Practice/Practice';

export default class App extends Component
{
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">トップ</Link></li>
            <li><Link to="/practice">練習</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/practice" component={Practice} />
          </Switch>
        </div>
      </Router>
    );
  }
}