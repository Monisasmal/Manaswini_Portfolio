
import './App.css';
import styled from "styled-components";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/themes';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';

import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const Body = styled.div` 
background-color: ${({theme})=> theme.bg};
width:100%;
height:100%
overflow-x: hidden;
`
const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201,32,184,0)50%), linear-gradient(141.27deg, rgba(0,70,209,0.15)100%);
width: 100%;

`

function App() {
  const [darkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme: lightTheme}>
      <Router>
      <Navbar />
      <Body>
        <HeroSection/>
        <Wrapper>
        <Skills/>
        <Education />
        </Wrapper>
        <Projects />
        <Experience />
         <Wrapper> 
          <Contact/>
       </Wrapper>
       <Footer/> 
      </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
