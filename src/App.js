import React from 'react';
import './style.css';
import SignUp from './components/signup';
//import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="" component={SignUp} />
      </Switch>
    </Router>
  );
}
