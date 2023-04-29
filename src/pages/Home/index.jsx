import React from 'react';
import TypeIt from "typeit-react";
import HeroPattern from '../../assets/HeroPattern';

import { lightTheme, darkTheme} from '../../theme'
import { Container, Text } from './styles';

function Home({ theme }) {
  return (
    <Container theme={theme === 'Light Mode' ? lightTheme : darkTheme}>
        <Text>
        Hi, My name is <span>Yudi.</span> <br/>
        <span>I'm a Front-End Developer.</span> <br/>
        My experience with {' '}
        <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
            instance.type("JavaScript.").pause(750).delete().pause(750).type("Html.")
            .pause(750).delete().pause(750).type("Css.").pause(750).delete().pause(750).type("React.")
            .pause(750).delete().pause(750).type("TypeScript.").pause(750);
            return instance;
        }}/>
        </Text>
        <HeroPattern />
    </Container>
  )
}

export default Home