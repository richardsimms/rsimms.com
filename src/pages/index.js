import React from 'react';
import Layout from '../components/layout';
import Card from '../components/Card';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import Wave from '../components/Wave';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const indexPage = ({ data }) => <Layout>
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>I help CEO’s and product manages create better experiences to capture more value</h1>
        <logo></logo>
      <Wave />
      </div>
    </div>
    <div className="ContentGroup ContentTop">
      <h3>I’m obsessed about crafting amazing digital products</h3>
      <p>Through design rigger, I increase confidence in assumptions to create better experiences people are willing to change their behaviour for. 
      </p>
    </div>
    <div className="ImageOverlap">
    <imageoverlap><Img className="Image" fluid={data.image1.childImageSharp.fluid} alt="Three screens from the Suncorp App" /></imageoverlap>
    <imageoverlap><Img className="Image" fluid={data.image2.childImageSharp.fluid} alt="Appmap of Suncorp App" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>I’ve had the pleasure to work with globally respected brands</h3>
      <p>Optimising products, defining experience strategy that delivers business growth and innovative products from conception to market.
        <br />When I’m not in front of a screen, you can find me on a bike, riding through the Australian bush or at least finding my Zen on beach road.
      </p>
    </div>
    <div className="ImageBlock">
      <Img className="Image" fluid={data.image3.childImageSharp.fluid} alt="Collection of Mastercard App screens" />
      <Img className="Image" fluid={data.image4.childImageSharp.fluid} alt="Single Mastercard screen" />
    </div>
    <div className="ContentGroup">      
      <h3>What’s new</h3>
      <ul>
        <li>Supporting multiple agile teams to deliver simple, yet stunning user experiences at  <a href="https://www.open.edu.au/online-courses?view=compare">Open Universities Australia</a></li>
        <li>I recently completed <a href="https://hells500.com/oldirty/">Hells Ol dirty</a> and <a href="https://www.bicyclenetwork.com.au/rides-and-events/around-the-bay/routes-prices/250km-anticlockwise/">Around the bay</a> bike rides</li>
        <li>Currently working on a <Link to="/process">value-based design</Link> sprint to help teams create compound outcome growth </li>
      </ul>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><Img className="Image" fluid={data.image5.childImageSharp.fluid} alt="Collection of components" /></imageoverlap>
      <imageoverlap><Img className="Image" fluid={data.image6.childImageSharp.fluid} alt="Close up of single component in iPad" /></imageoverlap>  
    </div>
    <Summary 
      title="Value-based design"
      text1="Building on top of design best practices and usability research. To include hypotheses which focuses on specific business needs, measure experiments to create outcome focused data driven design solutions."
    />
    <div className="Cards">
     <h2>What I’ve made</h2>
      <div className="CardGroup">
        <Card  
          link="/suncorp"
          title="Suncorp App" 
          text="UX Design & Strategy"
          image={require('../images/card-suncorp.jpg')}
          />
        <Card  
          link="/mastercard" 
          title="Mastercard" 
          text="UX & UI Design"
          image={require('../images/hero-mastercard.jpg')}
          />
        <Card  
          link="/european-tour"
          title="European Tour" 
          text="UX Design"
          image={require('../images/card-et.jpg')}
          />
        </div>
    </div>
    
    <Footer />
  </div>
</Layout>
export default indexPage

export const pageQuery = graphql`
query {
  image1: file(relativePath: { eq: "img-large-suncorp.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image2: file(relativePath: { eq: "img-small-appmap.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image3: file(relativePath: { eq: "img-square-mastercard.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image4: file(relativePath: { eq: "img-portrait-mastercard.jpg" }) {
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
