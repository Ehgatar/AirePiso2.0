import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './sass';
import Headers from './components/Headers/Headers';
import RealEstate from './components/RealEstate/RealEstate';
import Listings from './components/Listings/Listings';
import {BrowserRouter as Router,Route} from 'react-router-dom' 


class App extends Component {
  render() {
    return (
      <div className="App">
       <Headers />
       <Listings />
       <Router>
        <Route exact path="/" component={RealEstate} />
        <Route path="/realestate" component={RealEstate} />
        <Route path="/listing" component={Listings} />
        </Router> 
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
