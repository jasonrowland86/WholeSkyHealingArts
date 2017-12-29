import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      mediaQuery: false,
      navBar: {
        display: "",
      },
      navMenu: {
        display: "none",
      },
    }

  }

  handleHideNav() {

  }

  getScreenSize() {

  }

  handleToggleNavMenu() {

  }

  render() {
    return (
      <div className="header">
        <nav className="nav-w-color">

          <div className="nav-left">
            <NavLink className="" link-attr="" to="/" activeClassName="active" ><img className="header-logo" src='./photos/favicon-96x96.png'></img></NavLink>
            <NavLink className="landing-nav-hack" to=""></NavLink>
          </div>

          <div className="nav-right" style={this.state.navBar}>
            <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
            <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
            <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
          </div>

          <div className="menu-button">
            <button style={this.state.navMenu} ><FontAwesome className="icon nav-menu" name="bars" size="1x"/></button>
          </div>

        </nav>
      </div>
    )
  }
}


export default Header;
