import React from 'react';
import Header from './Header';

const Services = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <div className="service-left left-side">
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

          <div className="services">
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
        <div className="right-side">
          <div className="service-images">
            <img className="massage-img" src="photos/Dan-massage.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
