import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
  constructor() {
    super();
    this.state = {

    }

  }

  handleHideNav() {

  }

  render() {
    return (
      <div className="header">
        <nav className="nav-w-color">
          <Link className="logo" to="/" style={{ color: 'black' }}><img className="about-img" src="photos/Hands_Circle.png" style={{ width: '30px' }}></img></Link>
          <Link className="landing-nav-hack" to=""></Link>
          <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
          <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
          <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>

          <a href="#" target="blank"><FontAwesome className="icon" name="facebook" size="1x"/></a>
          <a href="#" target="blank"><FontAwesome className="icon" name="instagram" size="1x"/></a>

        </nav>
      </div>
    )
  }
}


export default Header;
