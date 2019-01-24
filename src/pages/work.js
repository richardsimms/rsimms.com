import React from 'react'
import styled  from 'styled-components'
import Header from '../components/header';


const Work = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    justify-items: left;
    grid-gap: 40px;
    position: relative;
    background: #333333;
    width: 100%;
    height: 100vh;
    padding: 10px 0;
    margin: 0 auto; 

    @media (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 0px;   
    }

    h1 {
        color: #FA5483;
        font-size: 24px;
        font-height: 600;
    }  

    p {
        color: #ffffff;
        font-size: 24px;
        line-height: 1.3;
    }
    a {
        font-weight:400;
    }
    a:hover {
        curser: pointer;
    }

`
const blank = styled.div`
    @media (max-width: 640px) {
        display: none;
       
}
`
const info = styled.div``

const WorkPage = () => (
    <div>
        <Header />
        <Work>
            <blank></blank>
            <info>
                <a href="/suncorp"><p>Suncorp</p></a>
                <a href="/european-tour"><p>European Tour</p></a>
                <a href="/mastercard"><p>Mastercard</p></a>
                <a href="/espn"><p>ESPN EPL</p></a>
            </info>
        </Work>
    </div>
)

export default WorkPage