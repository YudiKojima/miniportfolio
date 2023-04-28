import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import './styles.css';


function Experience() {

  return (
    <div className='container'>
        <h1>
          <span className='nameText'>Experience.<Underline /></span>
        </h1>
        <HeroPattern />
    </div>
  )
}

export default Experience