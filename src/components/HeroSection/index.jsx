
import { Bio } from '../../Data/constants';
import TypeWriter from 'typewriter-effect';
import HeroImg from "../Images/ManaswiniPortfolioImg.jpeg";
import {HeroContainer, HeroInnerContainer, HeroLeftContainer,Title, HeroRightContainer, Img, TextLoop, SubTitle,ResumeButton,Span} from './heroStyle';
const HeroSection = () => {
  return (
  <div>
    <HeroContainer id='about'>
      <HeroInnerContainer>
        <HeroLeftContainer id ="left">
          <Title>Hi, I am  <br/> {Bio.name}</Title>
          <TextLoop>I am a<Span><TypeWriter options ={{strings: Bio.roles, autoStart: true, loop:true,}} /></Span></TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href= {Bio.resume} target="display">Check Resume</ResumeButton>
        </HeroLeftContainer>
        <HeroRightContainer id = "Right">
          <Img src ={HeroImg} alt="hero-image"/>
        </HeroRightContainer>
      </HeroInnerContainer> 
    </HeroContainer>
  </div>
  )
}

export default HeroSection