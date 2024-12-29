import React, { useState } from "react";
 import { useTheme } from "styled-components";
import {
  Nav,
  NavbarContainer,
  // NavLogo,
  MobileIcon,
  NavItems,
  NavLink,
  ButtonContainer,
  GitHubButton,
  MobileMenu,
  MobileLink,
  Img,
  
} from "./NavbarStyle";
import Logo2 from "../Images/PortfolioLogo.jpeg";
import { Bio } from "../../Data/constants";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        {/* <NavLogo to="/"> */}
          <Img
            src={Logo2}
            style={{ cursor: "pointer", size: "1rem" }}
            alt="Logo Iamge"
          />
        {/* </NavLogo> */}
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={()=>{ setIsOpen(!isOpen)}}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={()=>{setIsOpen(!isOpen)}}>Project</MobileLink>
            <MobileLink href="#education" onClick={()=>{setIsOpen(!isOpen)}}>Education</MobileLink>
            <MobileLink href="#contact" onClick={()=>{setIsOpen(!isOpen)}}>Contact</MobileLink>
            <GitHubButton style={{padding:"10px, 16px", background: `${theme.primary}`, color:"white", width:"max-content"}} href={Bio.github}>GitHub Profile</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
