import React from 'react'
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from '../../theme'

import { GlobalStyles } from '../../GlobalStyles';
import { Container, ButtonSun, ButtonMoon } from './styles';

import { FaSun, FaMoon } from "react-icons/fa";

function VisualMode({ theme, onClick }) {

  return (
    <ThemeProvider theme={theme === 'Light Mode' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          {
            theme === 'Light Mode' 
            ? <ButtonMoon onClick={onClick}><FaMoon />
            </ButtonMoon> 
            : <ButtonSun onClick={onClick}><FaSun />
            </ButtonSun>
          }

        </Container>
    </ThemeProvider>
  )
}

export default VisualMode