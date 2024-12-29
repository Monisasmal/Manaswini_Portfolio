import React, { useState } from "react";
import { projects } from "../../Data/constants";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
// import _default from "../../Themes/default";

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 500;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;
const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary + 20};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  // const[limit, setLimit] = useState(3);

  // const loadMore = () => {
  //   setLimit(limit+3)
  // }
  return (

    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'React' ?
            <ToggleButton active value="React" onClick={() => setToggle('React')}>React</ToggleButton>
            :
            <ToggleButton value="React" onClick={() => setToggle('React')}>React</ToggleButton>
          }
          <Divider />
          {toggle === 'Angular' ?
            <ToggleButton active value="Angular" onClick={() => setToggle('Angular')}>Angular</ToggleButton>
            :
            <ToggleButton value="Angular" onClick={() => setToggle('Angular')}>Angular</ToggleButton>
          }
          <Divider />
          {toggle === 'WebApp' ?
            <ToggleButton active value="WebApp" onClick={() => setToggle('WebApp')}>WebApp</ToggleButton>
            :
            <ToggleButton value="WebApp" onClick={() => setToggle('WebApp')}>WebApp</ToggleButton>
          }
          <Divider />
          {toggle === 'VanillaJS' ?
            <ToggleButton active value="VanillaJS" onClick={() => setToggle('VanillaJS')}>VanillaJS</ToggleButton>
            :
            <ToggleButton value="VanillaJS" onClick={() => setToggle('VanillaJS')}>VanillaJS</ToggleButton>
          }
          
        </ToggleButtonGroup>
        
        <CardContainer>
        {/* <button className='load-btn' onClick={ () => loadMore}>Load More</button> */}
        
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project}  openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects

