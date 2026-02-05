import  { useState } from "react";
import { useTheme } from "styled-components";
import { FaBars } from "react-icons/fa6";
import { Bio } from "../../Data/constants";
import Logo2 from "../Images/PortfolioLogo.jpeg";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  MobileMenu,
  MobileLink,
  Img,
} from "./NavbarStyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <Img src={Logo2} alt="Logo" />
        
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MobileIcon>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>

        <MobileMenu isOpen={isOpen}>
          <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
          <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
          <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
          <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
          <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
          <MobileLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>
          <GitHubButton 
            style={{
              padding: "10px 16px", 
              background: theme.primary, 
              color: "white", 
              width: "max-content",
              margin: "0 auto"
            }} 
            href={Bio.github} 
            target="_blank"
          >
            GitHub Profile
          </GitHubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;