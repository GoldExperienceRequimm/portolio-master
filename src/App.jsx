import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Navbar from "./Components/Nav/index.jsx";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
// import About from "./components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./Components/ProjectDetails";
import styled from "styled-components";

const darkTheme = {
  bg: "#1C1C27",
  bgLight: "#1C1E27",
  primary: "#854CE6",
  text_primary: "#F2F3F4",
  text_secondary: "#b1b2b3",
  card: "#171721",
  card_light: "#191924",
  button: "#854CE6",
  white: "#FFFFFF",
  black: "#000000",
};

const lightTheme = {
  bg: "#FFFFFF",
  bgLight: "#f0f0f0",
  primary: "#be1adb",
  text_primary: "#111111",
  text_secondary: "#48494a",
  card: "#FFFFFF",
  button: "#5c5b5b",
};

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  height: auto;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [darkMode, setDarkMode] = useState(true);

  console.log(openModal);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
