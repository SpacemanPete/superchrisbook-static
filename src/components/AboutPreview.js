import React from 'react'
import BatmanCape from '../img/Chris_in_batman_cape.jpg'

export default () => (
  <section className="about-preview">
    <div className='container section flex-wrap'>
      <div className='text-wrapper'>
        <h2 className='section-title'>About the book</h2>
        <div className='description'>
          <p>dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum</p>
        </div>  
      </div>
      <div className='image-wrapper'>
        <img src={BatmanCape} alt='Chris in a Batman cape'/>
      </div>
    </div>
  </section>
);
