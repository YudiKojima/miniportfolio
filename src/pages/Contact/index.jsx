import React from 'react';
import HeroPattern from '../../assets/HeroPattern';
import Underline from '../../assets/Underline';

import { lightTheme, darkTheme} from '../../theme'
import { Container, Text } from './styles';
import Fade from 'react-reveal/Fade';


function Contact({ theme }) {

  return (
    <Container theme={theme === 'Light Mode' ? lightTheme : darkTheme}>
      <Fade bottom>
        <Text>
          <span>Contact.<Underline /></span>
        </Text>
        </Fade>
        <HeroPattern />
    </Container>
  )
}

export default Contact