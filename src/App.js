import React, { Component } from 'react';
import './App.css';
import './mobile.css';
//React Router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Links from './components/Links';
import TestLanding from './components/TestLanding';

class App extends Component {
  constructor() {
    super();
    this.state = {
      landingPage: true,
    }
  this.hideHeader = this.hideHeader.bind(this);
  }

  hideHeader() {
    if(!this.state.landingPage) {
      return <Header />;
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.hideHeader()}
          <Route exact path='/' render={() => <Landing />} />
          <Route exact path='/services' render={() => <Services activeClassName="active" />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/contact' render={() => <Contact />} />
          <Route exact path='/links' render={() => <Links />} />
          <Route exact path='/test' render={() => <TestLanding />} />
        </div>
      </Router>
    );
  }
}

export default App;
