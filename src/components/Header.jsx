import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      didScroll: false,
    }

  }

  handleHideNav() {

  }

  render() {
    return (
      <div className="header">
        <nav className="nav-w-color">
          <Link className="logo" to="/" style={{ color: 'black' }}>Logo</Link>
          <Link className="landing-nav-hack" to=""></Link>
          <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
          <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
          <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
        </nav>
      </div>
    )
  }
}


export default Header;
