import React from 'react';
import styled  from 'styled-components';


const FooterGroup = styled.div`
    position: relative;
    max-width: 960px;
    width: 100%;
    padding: 90px 0;
    margin: 0 auto; 
`

const FooterTitleGroup = styled.div`
    max-width: 800px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 3fr;
    margin: 0 40px;
    justify-items: end;


    @media (max-width: 640px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        justify-items: center;
        margin: 0 20px;
    }
`

const FooterText = styled.a`
    color: #333333;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    line-height: 1.2;
 
    @media (max-width: 640px) {
        font-size: 12px;
    }
`




const Footer = props => (
    <FooterGroup>
        <FooterTitleGroup>
            <FooterText><a href="https://www.instagram.com/valuebased.design/channel/">Instagram</a></FooterText>
            <FooterText><a href="/privacy">Privacy Policy</a></FooterText>
            <FooterText>©RSIMMS</FooterText>
        </FooterTitleGroup>
    </FooterGroup>
)


export default Footer