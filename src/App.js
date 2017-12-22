import React, { Component } from 'react';
import './App.css';
//React Router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Components
import Footer from './components/Footer';
import Landing from './components/Landing';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/services' render={() => <Services activeClassName="active" />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/contact' render={() => <Contact />} />
        </div>
      </Router>
    );
  }
}

export default App;
