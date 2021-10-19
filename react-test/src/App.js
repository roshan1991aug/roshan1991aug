import React from 'react'
import './App.css';

import Repositories from './Components/Repositories/Repositories';
import Header from './Components/Header/Header';
import Developer from './Components/Developer/Developer';
import PageNotFound from './Components/Views/PageNotFound';
import TrendingInfo from './Components/Views/TrendingInfo';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="page__wrapper"> 
      <Router>
        <TrendingInfo />
        <Header /> 
        <Switch>
          <Route exact path="/"> <Repositories /> </Route>
          <Route exact path="/developer"> <Developer />  </Route>
          <Route path="*"><PageNotFound /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
