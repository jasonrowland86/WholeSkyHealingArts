import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <div id="background" className="landing landing-img" style = {{background: `url(../Dan-sunset.jpg) no-repeat center center fixed`, backgroundSize: 'cover'}}>
      <div className="header">
        <nav>
          <Link className="landing-nav landing-logo" to="/">Logo</Link>
          <Link className="landing-nav-hack" to=""></Link>
          <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active"></NavLink>
          <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active"></NavLink>
          <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active"></NavLink>
        </nav>
      </div>
      <h1 id="title" className='landing-title'>WHOLE SKY HEALING ARTS</h1>
    </div>
  )
}


export default Landing;
