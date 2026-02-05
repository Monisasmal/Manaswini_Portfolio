
import  { useState } from "react";
import { projects } from "../../Data/constants";
import ProjectCard from "./ProjectCard";
import LoadMoreProjects from "../LoadMoreButton/LoadMore"
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
    font-size: 14px;
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
    flex-direction: column; /* Switches from row to column */
    width: 80%;
    max-width: 400px; /* Keeps the column from being too wide on tablets */
    border: none; /* Optional: remove outer border if using individual button borders */
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
  
  @media (max-width: 768px) {
    width: 100%; /* Divider becomes a horizontal line */
    height: 1.5px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;

  ${({ active, theme }) => active && `
    background: ${theme.primary + 20};
  `}

  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }

  @media (max-width: 768px) {
    padding: 12px 18px; /* More vertical space for thumb-tapping */
    border: 1px solid ${({ theme }) => theme.primary + 50}; /* Adds definition between items */
    border-radius: 8px;
    margin: 4px 0;
  }
`;

const SubText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #FFFFFF; /* This makes the 2nd heading white */
  text-transform: uppercase;
  opacity: 0.9; /* Slightly transparent so it's not too harsh */
  
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;



const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;


// eslint-disable-next-line react/prop-types
const Projects = ({openModal,setOpenModal}) => {
  
  const [toggle, setToggle] = useState('all');
 
  const[limit, setLimit] = useState(6);

  const loadMore = () => {
    setLimit(limit+3)
  }
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
          {toggle === 'Full Stack' ? (
          <ToggleButton active value="Full Stack" onClick={() => setToggle('Full Stack')}>
            <div style={{ fontWeight: '600' }}>Full Stack</div>
            <SubText>MERN, NEXTJS</SubText>
          </ToggleButton>
            ) : (
              <ToggleButton value="Full Stack" onClick={() => setToggle('Full Stack')}>
                <div style={{ fontWeight: '600' }}>Full Stack</div>
               <SubText>MERN, NEXTJS</SubText>
              </ToggleButton>
            )}
          <Divider /> 
          {toggle === 'Frontend' ? (
            <ToggleButton active value="Frontend" onClick={() => setToggle('Frontend')}>
              <div style={{ fontWeight: '600' }}>Frontend</div>
               <SubText>REACT, NEXTJS</SubText>
            </ToggleButton>
          ) : (
            <ToggleButton value="Frontend" onClick={() => setToggle('Frontend')}>
              <div style={{ fontWeight: '600' }}>Frontend</div>
              <SubText>REACT, NEXTJS</SubText>
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Backend' ? (
            <ToggleButton active value="Backend" onClick={() => setToggle('Backend')}>
              <div style={{ fontWeight: '600' }}>Backend</div>
              <SubText>NODEJS,EXPRESSJS,MONGODB</SubText>
            </ToggleButton>
          ) : (
            <ToggleButton value="Backend" onClick={() => setToggle('Backend')}>
              <div style={{ fontWeight: '600' }}>Backend</div>
              <SubText>NODEJS, EXPRESSJS, MONGODB</SubText>
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'WebApp' ? (
            <ToggleButton active value="WebApp" onClick={() => setToggle('WebApp')}>
              <div style={{ fontWeight: '600' }}>Web APP</div>
              <SubText>HTML, CSS, JS</SubText>
            </ToggleButton>
          ) : (
            <ToggleButton value="WebApp" onClick={() => setToggle('WebApp')}>
              <div style={{ fontWeight: '600' }}>Web APP</div>
              <SubText>HTML, CSS, JS</SubText>
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        
        <CardContainer>
        
          {/* {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project}  openModal={openModal} setOpenModal={setOpenModal}/>
            ))} */}

            {toggle === 'all' &&
  projects
    .slice(0, limit) // <-- Apply limit here
    .map((project) => (
      <ProjectCard
        key={project.id} // It's best to use a unique key
        project={project}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    ))}
{toggle !== 'all' &&
  projects
    .filter((item) => item.category === toggle)
    .slice(0, limit) //  Apply limit here too
    .map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    ))}


        </CardContainer>

        {/* Display Load More button */}
        {limit < projects.length && (
          <LoadMoreProjects onClick={loadMore} />
        )}

      </Wrapper>
    </Container>
  )
}

export default Projects

