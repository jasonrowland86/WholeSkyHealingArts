import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImg: `url(../Dan-sunset.jpg) no-repeat center center fixed`,
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      backgroundImg: `url(../Dan-hands.jpg) no-repeat center center fixed`,
    });
  }

  handleMouseOut() {
    this.setState({
      backgroundImg: `url(../Dan-sunset.jpg) no-repeat center center fixed`,
    })
  }

  render() {
    return (
      <div className="landing landing-img" style={{background: this.state.backgroundImg, backgroundSize: 'cover'}}>
        <div className="header">
          <nav>
            <Link className="landing-nav landing-logo" to="/">Logo</Link>
            <Link className="landing-nav-hack" to=""></Link>
            <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active"></NavLink>
            <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active"></NavLink>
            <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active"></NavLink>
          </nav>
        </div>

        <h1 onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} className='landing-title'>Whole Sky Healing Arts</h1>
      </div>
    )
  }
}


export default Landing;
