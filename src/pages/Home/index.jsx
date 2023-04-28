import React from 'react';
import TypeIt from "typeit-react";
import HeroPattern from '../../assets/HeroPattern'
import Underline from '../../assets/Underline';

import './styles.css';


function Home() {

  return (
    <div className='container'>
        <h1>
        Hi, My name is <span className='nameText'>Yudi.<Underline /></span> <br/>
        <span className='colorText'>I'm a Front-End Developer.</span> <br/>
        My experience with {' '}
        <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
            instance.type("JavaScript.").pause(750).delete().pause(750).type("Html.")
            .pause(750).delete().pause(750).type("Css.").pause(750).delete().pause(750).type("React.")
            .pause(750).delete().pause(750).type("TypeScript.").pause(750);
            return instance;
        }}/>
        </h1>
        <HeroPattern />
    </div>
  )
}

export default Home