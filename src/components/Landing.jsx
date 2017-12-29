import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';
import { CSSTransitionGroup } from 'react-transition-group';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImg: {
        backgroundImage: `url(../photos/Dan-sunset-edited.jpg)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center fixed',
        WebkitTransition: 'background-image 0.3s ease',
        MozTransition: 'background-image 0.3s ease',
        OTransition: 'background-image 0.3s ease',
        msTransition: 'background-image 0.3s ease',
        transition: 'background-image 0.3s ease',
      },
      mediaQuery: false,
      navBar: {
        display: "",
      },
      navMenu: {
        display: "none",
      },
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      backgroundImg: {
        backgroundImage: `url(../photos/Dan-hands.jpg)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center fixed',
        WebkitTransition: 'background-image 0.3s ease',
        MozTransition: 'background-image 0.3s ease',
        OTransition: 'background-image 0.3s ease',
        msTransition: 'background-image 0.3s ease',
        transition: 'background-image 0.3s ease',
      }
    });
  }

  handleMouseOut() {
    this.setState({
      backgroundImg: {
        backgroundImage: `url(../photos/Dan-sunset-edited.jpg)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center fixed',
        WebkitTransition: 'background-image 0.3s ease',
        MozTransition: 'background-image 0.3s ease',
        OTransition: 'background-image 0.3s ease',
        msTransition: 'background-image 0.3s ease',
        transition: 'background-image 0.3s ease',
      }
    });
  }

  render() {
    return (
      <div className="landing landing-img" style={this.state.backgroundImg}>
        <div className="header">
          <nav className="nav-main">

            <div className="nav-left">
              <NavLink className="landing-nav landing-logo" to="/"><img className='hand-white' src='./photos/handweblogowhite-lg.png'></img></NavLink>
              <NavLink className="landing-nav-hack" to=""></NavLink>
            </div>

            <div className="nav-right" style={this.state.navBar}>
              <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active"></NavLink>
              <button style={this.state.navMenu} ><FontAwesome className="icon nav-menu" name="bars" size="1x"/>NavMenu</button>
            </div>

          </nav>
        </div>

        <div onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className='landing-title'>
          <h1>Whole Sky</h1>
          <h3>Healing Arts</h3>
        </div>

      </div>
    )
  }
}


export default Landing;
