import React, { Component } from 'react';
import './App.css';
//import './sass';
import Headers from './components/Headers/Headers';
import Filter from './components/Filter/Filter';
import Listings from './components/Listings/Listings';
import About from "./components/pages/About"
import {BrowserRouter as Router,Route} from 'react-router-dom' 


class App extends Component {
  render() {
    return (
       <Router>
         <div>
          <Headers />
          <section id="content-area">
          <Listings />
          <Filter />
          </section>
          <Route exact path="/about" component={About} />
        </div>

        </Router> 
    );
  }
}

export default App;




