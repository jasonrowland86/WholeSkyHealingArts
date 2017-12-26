import React from 'react';
import MyMap from './MyMap';
import Header from './Header';
import ContactForm from './ContactForm';

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

        <div className="media-links">

        </div>

      <ContactForm />
      </div>

    </div>
  )
}

export default Contact;
