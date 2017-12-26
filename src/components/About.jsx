import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <div className="main">
      <Header />
      <div className="about main-content">
        <div className="about-left left-side">
          <img className="about-img" src="photos/Dan-full.jpg"></img>
        </div>
        <div className="right-side">

          <h3>Whole Sky Healing Arts</h3>
          <p>Dedicated to the expansion of human life-force.</p>
          <p>Our energy flow affects how we feel, how we think, and the overall state of our well being.</p>
          <p>Energy blocks can be the result of injuries, traumas, diets, addictions,
            lack of excercise, and most of all stress.</p>
          <p>Our goal is to restore proper
            balance, alignment, vibration and energy flow in the human body. This will
            be achieved through the combination and application of various bodywork
            and energy balancing methods.</p>

          <div className="about-mobile">
            <h3>
              Daniel Duron is a certified IPHM massage and bodywork (Alchemy of Touch)
              practitioner, and Universal life-force energy (Reiki) provider.
            </h3>
            <p>
              Alchemy of Touch is a fusion of Rebalancing massage from India that
              integrates Deep Tissue massage, Myofascial release method, correct breathing,
              meditative healing approach, visceral work, polarity energy work and
              Thai yoga stretches. This method was developed by Tapesh Paradiso and
              expanded with the expertise of Anouk Hornman.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}


export default About;
