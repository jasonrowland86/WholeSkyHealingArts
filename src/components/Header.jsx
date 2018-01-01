import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      navMenu: {
        display: 'none'
      }
    }
    this.handleToggleNavMenu = this.handleToggleNavMenu.bind(this);
    this.showOrHideNavMenu = this.showOrHideNavMenu.bind(this);
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
      <div className="header">
        <nav className="nav-w-color">

          <div className="nav-left">
            <NavLink className="nav-link" style={{borderBottom: 'none'}} link-attr="" to="/" ><img className="header-logo" src='./photos/favicon-96x96.png'></img></NavLink>
            <NavLink className="landing-nav-hack" style={{borderBottom: 'none'}} to=""></NavLink>
          </div>

          <div className="nav-right" style={this.state.navBar}>
            <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
            <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
            <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
          </div>

          <div className=''>
            <div onClick={this.handleToggleNavMenu} className="landing-nav-menu nav-menu" style={{color: 'black'}}><FontAwesome className="icon" name="bars" size="1x"/></div>
            <div className="drop-down" style={this.state.navMenu}>
              <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
              <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
              <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
            </div>
          </div>

        </nav>
      </div>
    )
  }
}


export default Header;
