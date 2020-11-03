import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Wave from '../components/Wave';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const indexPage = ({ data }) => <Layout>
  <div>
    <div className="Hero">
      <div className="HeroGroup">        
      <Wave />
      </div>
    </div>
    <div className="HeroGroup">
      <span>Start designing impact, not opinions.</span>
      <h1>Design for clarity when everything is uncertain </h1>    
      <h2>Make profitable design decisions even in these crazy times. </h2> 
    </div>
    
    <div className="ContentGroup ContentTop">
      <h3>Work with us at <a href="ttps://www.open.edu.au/">Open University Australia</a></h3>
      <ul>
        <li>Open Universities Australia is a nonprofit marketplace for higher education across Australia that I lead the usability experience.</li>
{/*         <li>We’re a team of designers, developers, and strategists who are  </li>
 */}      </ul>
    </div>
    <div className="ImageSingle">
    <Img className="Image" fluid={data.image1.childImageSharp.fluid} alt="Three screens from the Suncorp App" />
   
    </div>
    <div className="ContentGroup">      
      <h3>Supporting our healthcare heroes </h3>
      <ul>
        <li>Rona Scrubs is a not for profit charity, established on 1 April 2020 in response to the COVID-19 pandemic reaching Australia’s shores and feedback from healthcare workers that they were unable to obtain scrubs to help them prevent the spread of COVID-19.</li>
        <li>We finished up making over 6,500 free scrubs for healthcare workers across Australia with the help of over 3,000 volunteers and generous donors.</li>
      </ul>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square.jpg')} alt="Initial concepts" />
      <img className="Image" src={require('../images/img-nurse.jpg')} alt="Final overview screen" />
    </div>
    <div className="ContentGroup">      
      <h3>Read <a href="http://vbd.substack.com">Find clarity in uncertainty</a>.</h3>
      <ul>
        <li>It's a value-based design approach to product design</li>
        <li>How to impacting business objectives by creating valuable experience for people.</li>
        <li>Discover what motivates your customers and to make informed design decisions</li>
        <li>Improving conversion rates, average order value and customer lifetime value</li>
      </ul>
    </div>
      
    <Footer />
  </div>
</Layout>
export default indexPage

export const pageQuery = graphql`
query {
  image1: file(relativePath: { eq: "watering.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image2: file(relativePath: { eq: "img-square.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 460) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image3: file(relativePath: { eq: "img-square-suncorp.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 460) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image4: file(relativePath: { eq: "img-portrait.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image5: file(relativePath: { eq: "img-large-et.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image6: file(relativePath: { eq: "img-small-et.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  
}
`
