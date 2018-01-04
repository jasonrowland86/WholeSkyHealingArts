import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      dropDown: {
        transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
        transform: 'translateY(-100%)',
        zIndex: '-1',
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
        dropDown: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(0%)',
          zIndex: '0',
        }
      });
    } else {
      this.setState({
        dropDown: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(-100%)',
          zIndex: '-1'
        }
      });
    }
  }

  render() {
    return (
      <header>
        <nav className="nav-w-color">

          <div className="nav-left">
            <NavLink className="nav-link" style={{borderBottom: 'none'}} link-attr="" to="/" ><img className="header-logo" src='./photos/favicon-96x96.png'></img></NavLink>
            <NavLink className="landing-nav-hack" style={{borderBottom: 'none'}} to=""></NavLink>
          </div>

          <div className="nav-right">
            <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
            <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
            <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
          </div>

          <div onClick={this.handleToggleNavMenu} className="landing-nav-menu nav-menu" style={{color: 'black'}}><FontAwesome className="icon" name="bars" size="lg"/></div>
          <div className="drop-down drop-down-hide" style={this.state.dropDown}>
            <div className=''>
              <NavLink className="nav-link" link-attr="Services" to="/services" activeClassName="active" ></NavLink>
              <NavLink className="nav-link" link-attr="About" to="/about" activeClassName="active" ></NavLink>
              <NavLink className="nav-link" link-attr="Contact" to="/contact" activeClassName="active" ></NavLink>
            </div>
          </div>

        </nav>
      </header>
    )
  }
}


export default Header;
