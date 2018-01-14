import React from 'react';
import MyMap from './MyMap';
import Header from './Header';
import TestContactForm from './TestContactForm';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'

class Contact extends React.Component {
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
      <div className="main contact">
        <div className="overlay" style={this.state.position, this.state.fade}>
          <Header />
          <h1>Contact</h1>
        </div>

        <h3 className="contact-heading">Located in Greenpoint Brooklyn</h3>

        <div className="map">
          <MyMap />
        </div>

        <div className="contact-info">

          <h3>Available</h3>
          <p>Tuesday - Saturday</p>

          <hr></hr>

          <h3>Find Daniel on</h3>
          <br></br>

          <div className="media-links">
            <a href="https://www.facebook.com/daniel.duron.108" target="blank"><FontAwesome className="icon" name="facebook" size="2x"/></a>
            <a href="https://www.instagram.com/whole_sky_18/" target="blank"><FontAwesome className="icon" name="instagram" size="2x"/></a>
          </div>

          <br></br>
          <hr></hr>

        <TestContactForm />
        </div>

      </div>
    )
  }
}

export default Contact;
