import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import DashBoard from './Dashboard';

const SurveyNew = () => <h2>Survey</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={DashBoard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
