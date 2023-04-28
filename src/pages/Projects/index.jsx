import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import './styles.css';


function Projects() {

  return (
    <div className='container'>
        <h1>
          <span className='nameText'>Projects.<Underline /></span>
        </h1>
        <HeroPattern />
    </div>
  )
}

export default Projects