import React from 'react'
import styled, { keyframes } from "styled-components";

const BounceAnimation = keyframes`
  0% { 
      height: 100vh ;
      }
  100% { 
      height: 90vh;
    }
`

const TextAnimation = keyframes`
  0% { 
      opacity: 0;
      }
  100% { 
      opacity: 100;
    }
`

const SectionGroup = styled.div`
    background: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%; 
    position: relative;
    align-items: center;
    justify-items: center;
    animation: ${BounceAnimation} 3s .3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 90vh;
    grid-gap: 10px;
    place-items: end center;
    justify-items: center;
    opacity: 0;
    animation: ${TextAnimation} 3s 1.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 24px;
    font-weight: 800;
    margin: 50px;

`



const Banner = props => (
    <SectionGroup image={props.image}>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
        </SectionTitleGroup>
    </SectionGroup>
)


export default Banner