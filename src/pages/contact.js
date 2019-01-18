import React from 'react'
import styled  from 'styled-components'
import Banner from '../components/Banner';


const Contact = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    justify-items: center;
    grid-gap: 40px;
    position: relative;
    background: #96CADF;
    width: 100%;
    height: 100vh;
    padding: 10px 0;
    margin: 0 auto; 

    h1 {
        color: #FA5483;
        font-size: 24px;
        font-height: 600;
    }  

    p {
        color: #333333;
        font-size: 18px;
        line-height: 1.3;
    }
`
const blank = styled.div``
const info = styled.div``

const ContactPage = () => (
    <Contact>
        <blank></blank>
        <info>
            <h1>Richard Simms</h1>
            <p>Design Lead</p>
            <p>richard@rsimms.com</p>
            <p>+61 437 116 722</p>
        </info>
    </Contact>
)

export default ContactPage
