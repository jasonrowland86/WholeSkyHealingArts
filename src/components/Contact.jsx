import React from 'react';
import MyMap from './MyMap';
import Header from './Header';
import ContactForm from './ContactForm';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'

const Contact = () => {
  return (
    <div className="contact">
      <Header />

      <h3 className="contact-heading">Located in Greenpoint Brooklyn</h3>

      <div className="map">
        <MyMap />
      </div>

      <div className="contact-info">

        <h3>Available</h3>
        <p>Tuesday - Saturday</p>

        <hr></hr>

        <h3>Find me on</h3>
        <div className="media-links">
          <a href="https://www.facebook.com/daniel.duron.108" target="blank"><FontAwesome className="icon" name="facebook" size="2x"/></a>
          <a href="https://www.instagram.com/whole_sky_18/" target="blank"><FontAwesome className="icon" name="instagram" size="2x"/></a>
        </div>
        
        <br></br>
        <hr></hr>

      <ContactForm />
      </div>

    </div>
  )
}

export default Contact;
