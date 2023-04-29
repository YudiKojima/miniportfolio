import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import { lightTheme, darkTheme} from '../../theme'
import { Container, Text } from './styles';


function Contact({ theme }) {

  return (
    <Container theme={theme === 'Light Mode' ? lightTheme : darkTheme}>
        <Text>
          <span>Contact.<Underline /></span>
        </Text>
        <HeroPattern />
    </Container>
  )
}

export default Contact