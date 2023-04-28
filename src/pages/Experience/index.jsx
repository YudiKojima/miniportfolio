import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import { Container, Text } from './styles';


function Experience() {

  return (
    <Container>
        <Text>
          <span>Experience.<Underline /></span>
        </Text>
        <HeroPattern />
    </Container>
  )
}

export default Experience