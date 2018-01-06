import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

class TestLanding extends Component {
  constructor() {
    super();
    this.state = {
      backgroundImgOne: {
        backgroundImage: `url(../photos/Dan-sunset-edited2.jpg)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center fixed',
        WebkitTransition: 'background-image 0.3s ease',
        MozTransition: 'background-image 0.3s ease',
        OTransition: 'background-image 0.3s ease',
        msTransition: 'background-image 0.3s ease',
        transition: 'background-image 0.3s ease',
        backfaceVisibility: 'hidden'
      },
      backgroundImgTwo: {
        backgroundImage: `url(../photos/Dan-hands.jpg)`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center fixed',
        WebkitTransition: 'background-image 0.3s ease',
        MozTransition: 'background-image 0.3s ease',
        OTransition: 'background-image 0.3s ease',
        msTransition: 'background-image 0.3s ease',
        transition: 'background-image 0.3s ease',
        backfaceVisibility: 'hidden'
      },
      background: '',
      clicked: true,
      dropDown: {
        transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
        transform: 'translateY(-100%)',
        zIndex: '-1',
        background: 'none'
      }
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleToggleNavMenu = this.handleToggleNavMenu.bind(this);
    this.showOrHideNavMenu = this.showOrHideNavMenu.bind(this);
  }

  componentWillMount() {
    this.setState({
      background: this.state.backgroundImgOne,
    });
  }

  handleMouseOver() {
    this.setState({
      background: this.state.backgroundImgTwo
    });
  }

  handleMouseOut() {
    this.setState({
      background: this.state.backgroundImgOne
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
          background: 'none'
        }
      });
    } else {
      this.setState({
        dropDown: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(-100%)',
          zIndex: '-1',
          background: 'none'
        }
      });
    }
  }

  render() {
    return (
      <div className="landing landing-img" style={this.state.background}>
        <header>
          <nav className="nav-main">

            <div className="nav-left">
              <NavLink className="landing-nav landing-logo" style={{borderBottom: 'none'}} to="/"><img className='hand-white' src='./favicons/favicon-96x96.png'></img></NavLink>
              <NavLink className="landing-nav-hack" style={{borderBottom: 'none'}} to=""></NavLink>
            </div>

            <div className="nav-right">
              <NavLink className="landing-nav nav-link" link-attr="Services" to="/services" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="About" to="/about" activeClassName="active"></NavLink>
              <NavLink className="landing-nav nav-link" link-attr="Contact" to="/contact" activeClassName="active"></NavLink>
            </div>

            <div onClick={this.handleToggleNavMenu} className="landing-nav-menu nav-menu" style={{color: 'white'}}><FontAwesome className="icon" name="bars" size="lg"/></div>
            <div className="drop-down drop-down-hide" style={this.state.dropDown}>
              <div className=''>
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


export default TestLanding;
