import React from 'react'
import styled  from 'styled-components'

const SummaryGroup = styled.div`
    background: #FAE3EA;
    background-size: cover;
    height: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-gap: 20px;
    position: relative;
    align-items: center;
    justify-items: center;
    top: -50px;
    z-index: -2;
`

const SummaryTitleGroup = styled.div`
    max-width: 720px;
    margin: 100px 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-rows: auto ;
    align-items: start;
`
const SummaryTitle = styled.h3`
    color: #FA5483;
    font-size: 30px;
    margin: 0;
    line-height: 1.2;
`

const SummaryText = styled.p`
    color: #244E5F;
    font-size: 26px;
    line-height: 1.3;
    margin: 0;
`


const Summary = props => (
    <SummaryGroup>
        <SummaryTitleGroup>
            <SummaryTitle>{props.title}</SummaryTitle>
            <SummaryText>{props.text1}</SummaryText>
            <SummaryText>{props.text2}</SummaryText>
            <SummaryText>{props.text3}</SummaryText>
        </SummaryTitleGroup>
    </SummaryGroup>
)


export default Summary