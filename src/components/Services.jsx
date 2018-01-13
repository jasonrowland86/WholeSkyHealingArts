import React, { Component } from 'react';
import Header from './Header';

class Services extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < .1;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
      this.handleScroll();
    });
  }

  handleScroll() {
    if(!this.state.isTop) {
      this.setState({
        position: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(-100%)'
        },
        fade: {
          visibility: 'hidden',
          opacity: '0',
          transition: 'visibility 0s .5s, opacity .5s linear'
        }
      });
    } else {
      this.setState({
        position: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(0%)'
        },
        fade: {
          visibility: 'visible',
          opacity: '1',
          transition: 'opacity .5s linear'
        }
      });
    }
  }

  render() {
    return (
      <div className="main">
        <div className="overlay" style={this.state.position, this.state.fade}>
          <Header />
          <h1>Services</h1>
        </div>

        <div className="service-content">
          <div className="service-left">

            <div className="services">

              <div className="service-description">
                <h3><a href="https://alchemyoftouch.com/">Alchemy of Touch</a></h3>
                <p>Massage</p>
                <br></br>
              </div>
              <hr></hr>

              <div className="service">

                <h3>60 Min</h3>
                <p className="price">$80</p>

              </div>

              <div className="service">

                <h3>90 Min</h3>
                <p className="price">$110</p>

              </div>
            </div>

          </div>

          <div className="service-right">

            <div className="service-images">
              <img className="massage-img" src="photos/Dan-massage.jpg"></img>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Services;
