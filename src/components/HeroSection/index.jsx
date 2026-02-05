
import { Bio } from '../../Data/constants';
import TypeWriter from 'typewriter-effect';
import HeroImg from "../Images/Manaswini Profile.jpeg";
import {HeroContainer, HeroInnerContainer, HeroLeftContainer,Title, HeroRightContainer, Img, TextLoop, SubTitle,ResumeButton,Span,FloatingIcon,
  HeroBg, ButtonContainer, ProjectButton} from './heroStyle';
const HeroSection = () => {
  return (
  <div>
    <HeroContainer id='about'>
      {/* Floating icons */}
  <FloatingIcon className="icon-1" delay="0s"><i className="fa-solid fa-laptop-code"></i></FloatingIcon>
        {/* <FloatingIcon className="icon-2" delay="1s"><i className="fa-solid fa-pen-nib"></i></FloatingIcon> */}
        <FloatingIcon className="icon-3" delay="2s"><i className="fa-solid fa-code"></i></FloatingIcon>
        <FloatingIcon className="icon-4" delay="1.5s"><i className="fa-solid fa-pencil"></i></FloatingIcon>

      <HeroInnerContainer>
        <HeroLeftContainer id ="left">
          <Title>Hi, I am  <br/> <span>{Bio.name}</span></Title>
          <TextLoop>I am a<Span><TypeWriter options ={{strings: Bio.roles, autoStart: true, loop:true,}} /></Span></TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          {/* <ResumeButton href= {Bio.resume} target="display">Check Resume</ResumeButton> */}
          <ButtonContainer>
    <ResumeButton href={Bio.resume} target="_blank">
        Check Resume
    </ResumeButton>
    <ProjectButton href="#projects">
        View Projects
    </ProjectButton>
</ButtonContainer>
        </HeroLeftContainer>
        <HeroRightContainer id = "Right">
          <HeroBg />
          <Img src ={HeroImg} alt="hero-image"/>
        </HeroRightContainer>
      </HeroInnerContainer> 
    </HeroContainer>
  </div>
  )
}

export default HeroSection