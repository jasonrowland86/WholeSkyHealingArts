import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link className="logo" to="/" style={{ color: 'black' }}>Logo</Link>
        <Link className="landing-nav-hack" to=""></Link>
        <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
        <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
        <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
      </nav>
    </div>
  )
}


export default Header;
