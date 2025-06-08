import React from 'react'
// import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa6";
// import NaukariIcon from '@mui/icons-material/Naukari';
import {Bio} from '../../Data/constants';

const FooterContainer = styled.div`
width: 100%;
padding: 2rem 0;
display:flex;
justify-content: center;

background-color: ${({theme})=> theme.card_light};
`
const FooterWrapper = styled.footer`
width: 100%;
max-width: 1200px;
display:flex;
flex-direction: column;
gap:14px;
align-items: center;
padding: 1rem;
color: ${({theme})=> theme.text_primary};
`

const Logo = styled.h1`
font-family:Pacifico;
font-weight: 600
font-size: 20px;
color: ${({theme})=> theme.primary};
`
const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <Logo>Manaswini Sasmal</Logo>
            <Nav>
                <NavLink href ="#about">About</NavLink>
                <NavLink href = "#skills">Skills</NavLink>
                <NavLink href = "#education">Education</NavLink>
                <NavLink href = "#project">Projects</NavLink>
                <NavLink href = "#experience">Experience</NavLink>
            </Nav>
            <SocialMediaIcons>
                <SocialMediaIcon href={Bio.linkedIn} traget="display"><FaLinkedin /></SocialMediaIcon>
                <SocialMediaIcon href= {Bio.Indeed} traget = "display"><SiIndeed /></SocialMediaIcon>
                <SocialMediaIcon href= {Bio.HackerRank} traget = "display"><FaHackerrank /></SocialMediaIcon>
                <SocialMediaIcon href= {Bio.LeetCode} traget = "display"><SiLeetcode /></SocialMediaIcon>
                <SocialMediaIcon href= {Bio.FreeCodeCamp} traget = "display"><FaFreeCodeCamp />
                </SocialMediaIcon>
                {/* <SocialMediaIcon href= {Bio.Naukari} traget = "display"><NaukariIcon /></SocialMediaIcon> */}
                {/* <SocialMediaIcon href= {Bio.Apna} traget = "display"><ApnaIcon /></SocialMediaIcon> */}
                </SocialMediaIcons>
                <Copyright>
                    &copy; {new Date().getFullYear()} Manaswini Sasmal. All rights reserved.
                </Copyright>
           
        </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer