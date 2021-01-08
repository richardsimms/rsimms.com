import React from 'react';
import styled  from 'styled-components';
import Layout from '../components/layout';




const Contact = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    justify-items: center;
    grid-gap: 40px;
    position: relative;
    background: #1F4753;
    background-color: #1F4753;
    width: 100%;
    height: 100vh;
    padding: 10px 0;
    margin: 0 auto; 
    overflow: hidden;
    scroll:no;

    h1 {
        color: #F8BFD0;
        font-size: 24px;
        font-height: 600;
    }  

    p {
        color: #FCF7F5;
        font-size: 18px;
        line-height: 1.3;
    }

    a {
        text-decoration:none;
    }

`
const blank = styled.div``
const info = styled.div``

const contactPage = () => <Layout>
        <Contact>
        <blank></blank>
        <info>
            <h1>Richard Simms</h1>
            <p>Design Lead</p><br />
            <hr />
            <a href="mailto:richard@rsimms.com"><p>richard@rsimms.com</p></a>
            <a href="sms:+61437116722"><p>+61 437 116 722</p></a>
            <a href="https://www.linkedin.com/in/richardsimms"><p>LinkedIn profile</p></a>
        </info>
    </Contact>
</Layout>

export default contactPage
