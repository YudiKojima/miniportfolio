import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import { Container, Text } from './styles';


function About() {

  return (
    <Container>
        <Text>
          <span>About.<Underline /></span>
        </Text>
        <HeroPattern />
    </Container>
  )
}

export default About