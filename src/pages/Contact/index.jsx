import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import { Container, Text } from './styles';


function Contact() {

  return (
    <Container>
        <Text>
          <span>Contact.<Underline /></span>
        </Text>
        <HeroPattern />
    </Container>
  )
}

export default Contact