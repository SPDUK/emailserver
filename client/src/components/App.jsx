import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const DashBoard = () => <h2>dashboard</h2>;
const SurveyNew = () => <h2>Survey</h2>;
const Landing = () => <h2> Landing</h2>;

const App = () => {
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
};

export default App;
