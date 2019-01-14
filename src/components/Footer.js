import React from 'react'
import styled  from 'styled-components'


const SectionGroup = styled.div`
    background-size: cover;
    height: 220px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
    align-items: center;
    justify-items: center;
 
    @media (max-width: 640px) {
        height: 820px;
    }

`

const SectionTitleGroup = styled.div`
    max-width: 800px;
    margin: 0 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const SectionTitle = styled.h3`
    color: black;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
 
    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: black;
`


const Footer = props => (
    <SectionGroup>
        <SectionTitleGroup>
            <SectionText><a href="{props.instagram}">Instagram</a></SectionText>
            <SectionText><a href="{props.privacy}">Privacy Policy</a></SectionText>
            <SectionText>{props.copyright}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)


export default Footer