import styled, { keyframes } from 'styled-components';

// 1. Define the floating animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

// 2. Define the rotating glow for the background
const pulse = keyframes`
  0% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.1); }
  100% { opacity: 0.4; transform: scale(1); }
`;

export const FloatingIcon = styled.div`
  position: absolute;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  opacity: 0.6;
  filter: drop-shadow(0 0 10px ${({ theme }) => theme.primary});
  animation: ${float} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  z-index: -1;

  @media (max-width: 960px) {
    display: none; // Hide icons on small screens to avoid clutter
  }

  &.icon-1 { top: 5%; left: 80%; }
  &.icon-3 { bottom: 20%; left: 58%; animation-duration: 6s; }
  &.icon-4 { bottom: 10%; right: 10%; animation-duration: 3s; }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, ${({ theme }) => theme.primary + '33'} 0%, transparent 70%);
  transform: translate(-50%, -50%);
  animation: ${pulse} 8s infinite ease-in-out;
  z-index: -1;

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

export const HeroContainer = styled.div`
  background: ${({theme})=> theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px; /* Fixed: Removed comma to prevent layout break */
  min-height: 90vh;
  width: 100%;
  z-index: 1;
  overflow: hidden; 

  @media (max-width: 960px){
    padding: 66px 16px;
    min-height: 80vh;
  }
  @media(max-width: 640px){
    padding: 32px 16px; /* Optimized for 375px mobile view */
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px){
    flex-direction: column; /* Prevents overlap by stacking elements earlier */
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column; /* Added missing semicolon */

  @media(max-width: 960px){
    order: 2;
    margin-bottom: 30px;
    align-items: center; /* Centers text for tablets and mobile */
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: flex-end;
  gap: 12px;

  @media(max-width: 960px){
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }
  @media(max-width: 640px){
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({theme})=>theme.primary};

  @media(max-width: 768px){
    max-width: 300px; /* Reduced size slightly for better tablet fit */
    max-height: 300px;
  }
  @media(max-width: 640px){
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 45px;
  margin-top: 20px;
  color: ${({theme})=>theme.text_primary};
  line-height: 1.2;

  span {
    background: linear-gradient(225deg, #854CE6 0%, #B044FF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media(max-width: 960px){
    text-align: center;
  }
  @media(max-width: 640px){
    font-size: 32px; /* Adjusted for mobile viewports */
    line-height: 40px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5; /* Reduced from 68px to prevent overlap with SubTitle */

  @media (max-width: 960px) {
    justify-content: center;
  }
  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 17px;
  line-height: 1.6;
  margin-bottom: 42px;
  color: ${({theme})=> theme.text_primary + '99'}; /* Fixed: removed +98 string issue */
  max-width: 600px;
  border-left: 4px solid ${({ theme }) => theme.primary};
  padding-left: 20px;
  margin-top: 14px;
  text-align: justify; /* Keeps it professional looking */

  @media(max-width: 960px){
    text-align: center;
    border-left: none;
    padding-left: 0;
  }
  @media(max-width: 640px){
    font-size: 14px; /* Scaled down for 375px screens */
    line-height: 24px;
  }
`;

export const ResumeButton = styled.a`
  text-decoration: none;
  display: inline-block;
  width: 100%;
  max-width: 250px;
  text-align: center;
  padding: 14px 0;
  color: ${({theme})=> theme.white};
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px; /* Slightly reduced for better fit */
  font-weight: 600;
  transition: all 0.3s ease; /* Removed extra semicolon */
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  box-shadow: 20px 20px 60px #1F2634;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(133, 76, 230, 0.6);
    filter: brightness(1.1);
  }

  @media(max-width: 960px){
    align-self: center; /* Ensures centering when in column mode */
  }

  @media(max-width: 640px){
    padding: 12px 0;
    font-size: 16px;
  }
`;