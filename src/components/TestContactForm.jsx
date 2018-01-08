import React from 'react';
import axios from 'axios';

class TestContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      form: {display: 'block'},
      thankyou: {display: 'none'},
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit(e, name, email, message) {
      e.preventDefault();
      console.log('Handling Submit');
      axios.post("https://formspree.io/danieleastandwest17@gmail.com", {
         name,
         email,
         message,
      }).then(res => {
         this.setState({
             form: {
               display: 'none',
             },
             thankyou: {
               display: 'block',
             }
         });
      }).catch(err => console.log(err));
      console.log(name, email, message);
    }

  render() {
    return(
      <div className="contact-form">

        <div className="form-container" style={this.state.form}>
          <h3 id="connect">Contact for inquiries</h3>

          <form id="gform" onSubmit={(e)=>this.handleSubmit(
                      e,
                      this.state.name,
                      this.state.email,
                      this.state.message,
                      )}>
            <label for="name">Name:</label><br></br>
            <input id="name" className="name" type="text" name="name" size="30" value={this.state.name} placeholder="" onChange={this.handleInputChange} required /><br></br>
            <br></br>
            <label for="email">Your Email:</label><br></br>
            <input className="email" type="text" name="email" size="30" value={this.state.email} placeholder="" onChange={this.handleInputChange} required /><br></br>
            <span id="email-invalid" style={{color: 'black'}}>Must be a valid email address</span>
            <br></br>
            <label for="message">Message:</label><br></br>
            <div className="comment">
            <textarea className="comment" type="text" name="message" value={this.state.message} onChange={this.handleInputChange} ></textarea><br></br>
            </div>
            <input className="submit" type="submit" value="Send"></input>
          </form>
        </div>
        <div className="thank-you" style={this.state.thankyou}><h1>Thank you!</h1></div>
        <br></br>
      </div>
    )
  }
}

export default TestContactForm;
