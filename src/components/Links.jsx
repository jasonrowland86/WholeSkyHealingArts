import React, { Component } from 'react';
import Header from './Header';

class Links extends Component {
  constructor() {
    super();
    this.state = {
      linkHover: {
        borderBottom: 'none',
        height: '1.5em'
      },
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      linkHover: {
        borderBottom: '1px solid black',
        height: '1.5em'
      }
    });
  }

  handleMouseOut() {
    this.setState({
      linkHover: {
        borderBottom: 'none',
        height: '1.5em'
      }
    });
  }

  render() {
    return (
      <div className="main">
        <Header />
        <div className="links">
          <a onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut} style={this.state.linkHover} href="https://alchemyoftouch.com/">Alchemy of Touch</a>
        </div>
      </div>
    )
  }
}


export default Links;
