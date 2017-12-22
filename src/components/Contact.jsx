import React from 'react';
import MyMap from './MyMap';
import Header from './Header';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <MyMap />
      <h3>Located in Greenpoint Brooklyn</h3>
      <p>Tuesday - Saturday</p>
      <ContactForm />
    </div>
  )
}

export default Contact;
