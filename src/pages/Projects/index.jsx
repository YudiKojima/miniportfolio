import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import { Container, Text } from './styles';


function Projects() {

  return (
    <Container>
        <Text>
          <span>Projects.<Underline /></span>
        </Text>
        <HeroPattern />
    </Container>
  )
}

export default Projects