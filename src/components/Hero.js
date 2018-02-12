import React from 'react'
import HeroImage from '../img/main_image.png'

export default () => (
  <section className="hero">
    <div className='container section flex-wrap'>
      <div className='img-wrapper'>
        <img src={HeroImage} alt='SUPERCHRIS in a box car' />
      </div>
      <div className='text-wrapper'>
        <h1 className='hero-title'>Super Chris</h1>
        <div className='hero-subtitle'>No frowns, all smiles!</div>
      </div>
    </div>
  </section>
);
