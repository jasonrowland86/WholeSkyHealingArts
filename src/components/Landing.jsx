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
        backgroundImage: `url(../photos/Dan-sunset-edited2.jpg)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center fixed',
        WebkitTransition: 'background-image 0.3s ease',
        MozTransition: 'background-image 0.3s ease',
        OTransition: 'background-image 0.3s ease',
        msTransition: 'background-image 0.3s ease',
        transition: 'background-image 0.3s ease',
      },
      clicked: false,
      navMenu: {
        display: 'none'
      }
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleToggleNavMenu = this.handleToggleNavMenu.bind(this);
    this.showOrHideNavMenu = this.showOrHideNavMenu.bind(this);
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
        backgroundImage: `url(../photos/Dan-sunset-edited2.jpg)`,
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

  handleToggleNavMenu() {
    if(!this.state.clicked) {
      this.setState({
        clicked: true,
      });
    } else {
      this.setState({
        clicked: false,
      });
    }
    this.showOrHideNavMenu();
  }

  showOrHideNavMenu() {
    if(this.state.clicked) {
      this.setState({
        navMenu: {
          display: 'block'
        }
      });
    } else {
      this.setState({
        navMenu: {
          display: 'none'
        }
      });
    }
  }

  render() {
    return (
      <div className="landing landing-img" style={this.state.backgroundImg}>
        <div className="header">
          <nav className="nav-main">

            <div className="nav-left">
              <NavLink className="landing-nav landing-logo" style={{borderBottom: 'none'}} to="/"><img className='hand-white' src='./favicons/favicon-96x96.png'></img></NavLink>
              <NavLink className="landing-nav-hack" style={{borderBottom: 'none'}} to=""></NavLink>
            </div>

            <div className="nav-right" style={this.state.navBar}>
              <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active"></NavLink>
            </div>

            <div className='drop-down-container'>
              <div onClick={this.handleToggleNavMenu} className="landing-nav-menu nav-menu" style={{color: 'white'}}><FontAwesome className="icon" name="bars" size="1x"/></div>
              <div className="drop-down-landing" style={this.state.navMenu}>
                <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
                <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
                <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
              </div>
            </div>

          </nav>
        </div>

        <div onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className='landing-title'>
          <h1>WHOLE SKY</h1>
          <h3>Healing Arts</h3>
        </div>

      </div>
    )
  }
}


export default Landing;
