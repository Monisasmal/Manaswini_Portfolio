import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
width:330px;
height:500px;
background-color: ${({theme})=> theme.card};
// cursor:pointer;
border-radius: 10px;
box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
overflow: hidden; 
padding: 26px 20px;
display: flex;
flex-direction: column;
gap:14px;
transition: all 0.5s ease-in-out;
&:hover{
  transform: translateY(-10px);
  box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
  filter: brightness(1.1);
}

`
const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Desc = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`
const ProjectButton = styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;
width: 95%;
max-width: 300px;
text-align: center;
padding: 6px 0;
color: ${({theme})=> theme.white};
border-radius: 20px;
cursor: pointer;
font-size: 15px;
font-weight: 600;
transition: all 0.2s ease-in-out !important;
background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover{
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1F2634;
        filter: brightness(1);
    }
    @media(max-width: 640px){
        padding: 12px 0;
        font-size: 18px;
    }

`;


const ProjectCard = ({project}) => {
  return (
    <>
      <Card>
          <Image src={project.image}/>
          <Tags>
              {project.tags?.map((tag, index) => (
              <Tag>{tag}</Tag>
              ))}
          </Tags>
          <Details>
              <Title>{project.title}</Title>
              <Date>{project.date}</Date>
              <Desc>{project.desc}</Desc>
          </Details>
          <ProjectButton href = {project.github} target = "display">View Project</ProjectButton>
                </Card>
            
                </>
  )
}

export default ProjectCard;

