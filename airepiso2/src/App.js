import React from 'react';
import './App.css';
//import './sass';
import Home from './components/Home/Home';
import About from "./components/pages/About"
import Headers from "./components/Headers/Headers"
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' 
// import particlesJS from './public/js/particlesJS'
// particlesJS.load('particles-js', './public/js/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });
import Particles from 'react-particles-js';


const App = () => (
  <Router>
    <div>
    <Particles />
    <Headers />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      {/* <Route exact path="/calc" component={Calc} /> */}
 </Switch>
  </div>

  </Router> 
)

export default App;




