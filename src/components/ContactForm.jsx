import React from 'react';

const ContactForm = () => {
  return(
    <div className="contact-form">

      <h3 id="connect">Contact for booking</h3>

      <form id="gform" action="https://script.google.com/macros/s/AKfycbxl5LpPm_0ch0P3BzKRapFNbFlUVyPHsIfIZVUjfeEr1qTWzGFz/exec" method="POST">
        <label for="name">Name:</label><br></br>
        <input id="name" type="text" name="name" size="30"></input><br></br>
        <br></br>
        <label for="email">Your Email:</label><br></br>
        <input type="text" name="mail" size="30"></input><br></br>
        <span id="email-invalid">Must be a valid email address</span>
        <br></br>
        <label for="message">Message:</label><br></br>
        <div className="comment">
        <textarea className="comment" type="text" name="comment"></textarea><br></br>
        </div>
        <input className="submit" type="submit" value="Send"></input>
      </form>
      <br></br>
    </div>
  )
}

export default ContactForm;
