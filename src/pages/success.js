
import React from 'react';
import Layout from '../components/layout';
import styled  from 'styled-components'


const Success = styled.div`
  h3 {
    color: #FCF7F5;
    font-size: 24px;
    font-weight: 800;
    margin: 50px;
    font-family: 'Fira Sans', sans-serif;
  }
  h1 {
    font-family: 'Fira Sans', sans-serif;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
    font-weight: 800;
    color: #580037;
    margin-block-end: 0.5em;
  }

`;
const success = () => ( <Layout>
     
  <Success>
    <div className="BannerThanks">
        <div className="SectionTitleGroup">
          <div><h3>Thanks!</h3></div>
        </div>
      </div>
    <div className="ContentGroup">      
      <h1>Thanks, <a href="/find-clarity-in-uncertainty.pdf">Download</a> your free guide here</h1>
    </div>

    </Success>
</Layout>
)
export default success


    