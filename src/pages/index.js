import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Wave from '../components/Wave';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Form from "../components/form";

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
      <Form />      

    </div>
    
    <div className="ContentGroup ContentTop">
      <h3>Work with us at <a href="ttps://www.open.edu.au/">Open University Australia</a></h3>
      <ul>
        <li>Open Universities Australia is a nonprofit marketplace for higher education across Australia that I lead the usability experience.</li>
        <li>As the lead UX designer at Open Universities Australia, I often wear many hats but my focus is always to ensure that the product teams are creating value for the customer.</li>
        <li>Gathering early input and validation from customers to save time and increase confidence. With a cadence of talking to custmers every four days, created empathy and radically improved the perception of how easy it is to work with Open Universities Australia.</li>
      </ul>
    </div>
    <div className="ImageSingle">
    <Img className="Image" fluid={data.image1.childImageSharp.fluid} alt="Three screens from the Suncorp App" />
   
    </div>
    <div className="ContentBackground">
      <div className="ContentGroup">     
        <h3>Supporting our healthcare heroes </h3>
        <ul>
          <li>Rona Scrubs is a not for profit charity, established on 1 April 2020 in response to the COVID-19 pandemic reaching Australia’s shores and feedback from healthcare workers that they were unable to obtain scrubs to help them prevent the spread of COVID-19.</li>
          <li>We finished up making over 6,500 free scrubs for healthcare workers across Australia with the help of over 3,000 volunteers and generous donors.</li>
        </ul>
      </div>
    </div> 
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square.jpg')} alt="Initial concepts" />
      <img className="Image" src={require('../images/img-nurse.jpg')} alt="Final overview screen" />
    </div>
    {/* <div className="ContentGroup">      
      <h3>Read <a href="http://vbd.substack.com">Find clarity in uncertainty</a>.</h3>
      <ul>
        <li>It's a value-based design approach to product design</li>
        <li>How to impacting business objectives by creating valuable experience for people.</li>
        <li>Discover what motivates your customers and to make informed design decisions</li>
        <li>Improving conversion rates, average order value and customer lifetime value</li>
      </ul>
    </div> */}
    <div className="ContentGroup">      
      <h3>Designed a single destination and the place to get your home, car, money and life sorted.</h3>
     <p>I lead and facilitated the strategic usability experience design of the Suncorp <a href="https://itunes.apple.com/au/app/suncorp-app/id1383025759?mt=8">iOS</a> / <a href="https://play.google.com/store/apps/details?id=au.com.suncorp.marketplace">Android</a> native banking and insurance marketplace.  I advocated a user-centered approach in design perspective and practice across the product and stakeholders. Throughout discovery, we continually gathered feedback from customers. We tested everything from the value proposition, the navigation concepts to the desirability of individual features.</p>
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
