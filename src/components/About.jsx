import React from 'react';
import Header from './Header';
import FontAwesome from 'react-fontawesome';

const About = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <div className="about-left left-side">
          <img className="about-img" src="photos/Dan-full.jpg"></img>
        </div>
        <div className="right-side">

          <h3>Whole Sky Healing Arts</h3>
          <p>Is dedicated to the expansion of human life-force energy.</p>
          <p>Our energy flow affects how we feel, how we think, and the overall state of our well being.</p>
          <p>Energy blockages can be the result of injuries, traumas, diets, addictions,
            lack of excercise, and most of all stress.</p>
          <p>Our goal is to restore proper
            balance, alignment, vibration and energy flow in the human body. This will
            be achieved through the combination and application of various bodywork
            and energy balancing methods.</p>

          <div className="about-right">
            <h3>Find me on:</h3>
            <a className="social-media-link"><p>Instagram</p></a>
            <a className="social-media-link"><p>Facebook</p></a>

            <a href="#" target="blank"><FontAwesome className="icon" name="facebook" size="1x"/></a>
            <a href="#" target="blank"><FontAwesome className="icon" name="instagram" size="1x"/></a>
          </div>

        </div>
      </div>
    </div>
  )
}


export default About;
