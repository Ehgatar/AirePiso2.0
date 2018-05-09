import React, { Component } from 'react';
import './App.css';
//import './sass';
import Home from './components/Home/Home';
import About from "./components/pages/About"
import Headers from "./components/Headers/Headers"
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' 



const App = () => (
  <Router>
    <div>
    <Headers />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </div>

  </Router> 
)

export default App;




