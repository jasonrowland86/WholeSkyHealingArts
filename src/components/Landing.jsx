import React, { Component, Image } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

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
      clicked: true,
      dropDown: {
        transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
        transform: 'translateY(-80%)',
        zIndex: '-1',
        background: 'rgba(26, 28, 36, .8)',
      },
      color: {
        background: 'none',
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
    console.log('clicked!');
    if(this.state.clicked) {
      this.setState({
        dropDown: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(0%)',
          zIndex: '0',
        },
        color: {
          background: 'none',
          transition: 'ease .3s'
        }
      });
    } else {
      this.setState({
        dropDown: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(-100%)',
          zIndex: '-1',
        },
        color: {
          background: 'none',
          transition: 'ease .3s'
        }
      });
    }
  }

  render() {
    return (
      <div className="landing landing-img" style={this.state.backgroundImg}>
        <header>
          <nav className="nav-main" style={this.state.color}>

            <div className="nav-left">
              <NavLink className="landing-nav landing-logo" style={{borderBottom: 'none'}} to="/"><img className='hand-white' style={{width: "100%"}} src='./favicons/favicon-96x96.png'></img></NavLink>
              <NavLink className="landing-nav-hack" style={{borderBottom: 'none'}} to=""></NavLink>
            </div>

            <div className="nav-right">
              <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active"></NavLink>
            </div>

            <div onClick={this.handleToggleNavMenu} className="landing-nav-menu nav-menu" style={{color: 'white', zIndex: '3'}}><FontAwesome className="icon" name="bars" size="2x"/></div>
            <div className="drop-down-landing drop-down-hide" style={this.state.dropDown}>
              <div className='drop-down-links'>
                <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
                <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
                <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
              </div>
            </div>

          </nav>
        </header>

        <div onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className='landing-title'>
          <h1>WHOLE SKY</h1>
          <h3>Healing Arts</h3>
        </div>

      </div>
    )
  }
}


export default Landing;
