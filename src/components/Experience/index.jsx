/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-key */

// import React from 'react'
import { experiences } from '../../Data/constants'
import styled from 'styled-components'
import TimeLine from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard'



const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 40px 0px 40px 0px;
@media(max-width: 960px){
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
padding: 40px 0;
gap: 12px;
@media(max-width: 960px){
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 32px;
text-align: center;
font-weight: 500;
margin-top: 10px;
color: ${({theme})=> theme.text_primary};
@media(max-width: 768px){
    margin-top: 12px;
    font-size: 32px;
}
`

const Desc = styled.div`
font-size: 18px;
text-align: center;
max-width: 600px;
color: ${({theme})=> theme.text_secondary};
@media(max-width : 768px){
    margin-top: 12px;
    font-size: 14px;
}
`


const TimelineSection = styled.div`
width: 100%;
max-width: 1000px;
margin-top: 10px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
`  

const index = () => {
  return (
    <Container id = "experience">
        <Wrapper>
            <Title>Experience/Courses</Title>
            <Desc>My Work Experience as a Software Developer and working on different projects.</Desc>
            <TimelineSection>
                <TimeLine>
                    {experiences.map((experience, index)=>(
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant = "outlined" color = "secondary"/>{index !== experience.length -1 && <TimelineConnector style = {{ background: '#854CE6'}}/>}
                            </TimelineSeparator>
                            <TimelineContent sx = {{py: '12px', px: 2}}>
                            <ExperienceCard experience = {experience}></ExperienceCard>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </TimeLine>
            </TimelineSection>
        </Wrapper>
    </Container>
  )
}

export default index;