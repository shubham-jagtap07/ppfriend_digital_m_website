import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../app/components/Hero';
import Services from '../app/components/Home';
import About from '../app/about/page';
import Contact from '../app/contact-us/page';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: bold;
  background: linear-gradient(45deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(45deg, #00f2fe 0%, #4facfe 100%);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar>
        <Logo
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          DigiSEO
        </Logo>
        <NavLinks>
          {['Home', 'Services', 'About', 'Contact'].map((link, index) => (
            <NavLink
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {link}
            </NavLink>
          ))}
        </NavLinks>
      </NavBar>
      <Hero />
      <Services />
      <About />
      <Contact />
    </AppContainer>
  );
};

export default App; 