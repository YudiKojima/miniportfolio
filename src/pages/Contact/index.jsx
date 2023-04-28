import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import './styles.css';


function Contact() {

  return (
    <div className='container'>
        <h1>
          <span className='nameText'>Contact.<Underline /></span>
        </h1>
        <HeroPattern />
    </div>
  )
}

export default Contact