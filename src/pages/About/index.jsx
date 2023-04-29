import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import { lightTheme, darkTheme} from '../../theme'
import { Container, Text } from './styles';

function About({ theme }) {

  return (
    <Container theme={theme === 'Light Mode' ? lightTheme : darkTheme}>
        <Text>
          <span>About.<Underline /></span>
        </Text>
        <HeroPattern />
    </Container>
  )
}

export default About