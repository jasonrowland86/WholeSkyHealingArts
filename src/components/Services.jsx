import React from 'react';
import Header from './Header';

const Services = () => {
  return (
    <div className="main">
      <Header />
      <div className="service-content">
        <div className="service-left">

          <div className="services">

            <div className="service-description">
              <h3><a href="https://alchemyoftouch.com/">Alchemy of Touch</a></h3>
              <p>Massage</p>
              <br></br>
            </div>

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

export default Services;
