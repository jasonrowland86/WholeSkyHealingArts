import React from 'react';
import Header from './Header';

const About = () => {
  return (
    <div className="main">
      <Header />
      <div className="about">

        <div className="about-left">
          <img className="about-img" src="photos/Dan-full.jpg"></img>
            <p className="about-p-mobile">
              Alchemy of Touch is a fusion of Rebalancing massage from India that
              integrates Deep Tissue massage, myofascial release method, correct breathing,
              meditative healing approach, visceral work, polarity energy work and
              Thai yoga stretches. This method was developed by Tapesh Paradiso and
              expanded with the expertise of Anouk Hornman.
            </p>
        </div>

        <div className="about-right">

          <div className="about-text">
            <h3><strong>Whole Sky Healing Arts </strong></h3>
            <p className="inline">is dedicated to the expansion of human life-force.</p>

            <p>Our goal is to restore proper
              balance, alignment, vibration and energy flow in the human body. This will
              be achieved through the combination and application of various bodywork
              and energy balancing methods.</p>

            <h3><strong>
              Daniel Duron is a certified IPHM massage and bodywork (Alchemy of Touch)
              practitioner, and Universal life-force energy (Reiki) provider.
            </strong></h3>

            <p className="about-p-desktop">
              <a href="https://alchemyoftouch.com/">Alchemy of Touch</a> is a fusion of Rebalancing massage from India that
              integrates Deep Tissue massage, myofascial release method, correct breathing,
              meditative healing approach, visceral work, polarity energy work and
              Thai yoga stretches. This method was developed by Tapesh Paradiso and
              expanded with the expertise of Anouk Hornman.
            </p>

          </div>

        </div>

      </div>
        <hr></hr>
        <div className="link">
          <p>More information at</p>
          <a href="https://alchemyoftouch.com/"><h3 className=""><strong>Alchemy of Touch</strong></h3></a>
        </div>
    </div>
  )
}


export default About;
