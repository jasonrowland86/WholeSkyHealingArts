import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImage: {
        backgroundImage: `url(../photos/Dan-sunset.jpg)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center fixed',
        WebkitTransition: 'background-image 0.3s ease',
        MozTransition: 'background-image 0.3s ease',
        OTransition: 'background-image 0.3s ease',
        msTransition: 'background-image 0.3s ease',
        transition: 'background-image 0.3s ease',
      }
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      backgroundImage: {
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
      backgroundImage: {
        backgroundImage: `url(../photos/Dan-sunset.jpg)`,
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
      <div className="landing landing-img" style={this.state.backgroundImage}>
        <div className="header">
          <nav>
            <Link className="landing-nav landing-logo" to="/">Logo</Link>
            <Link className="landing-nav-hack" to=""></Link>
            <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active"></NavLink>
            <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active"></NavLink>
            <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active"></NavLink>
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
