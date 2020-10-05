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
        <h1>Conversion rate optimisation and value-based design practices for eCommerce.</h1>
        <h2>Conversion rate optimisation and value-based design practices for eCommerce.</h2>
        <logo></logo>
      <Wave />
      </div>
    </div>
    <div className="ContentGroup ContentTop">
      <h3>I’m a user experience and interaction design expert in Melbourne</h3>
      <p>I’m focused on optimisations and value-based design practices for eCommerce. With over 14 years of experience in design, I’ve had the pleasure to work with globally respected brands. I spend my spare time cycling and play footy with my son. 
</p>
    </div>
    <div className="ImageOverlap">
    <imageoverlap><Img className="Image" fluid={data.image1.childImageSharp.fluid} alt="Three screens from the Suncorp App" /></imageoverlap>
    <imageoverlap><Img className="Image" fluid={data.image2.childImageSharp.fluid} alt="Appmap of Suncorp App" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>I lead teams to create innovative products from conception to market</h3>
      <p>Conducting continuous customer research and experiments. To optimise products, define strategies that delivers business growth and world class customer experiences.</p>
    </div>
    <div className="ImageBlock">
      <Img className="Image" fluid={data.image3.childImageSharp.fluid} alt="Collection of Mastercard App screens" />
      <Img className="Image" fluid={data.image4.childImageSharp.fluid} alt="Single Mastercard screen" />
    </div>
    <div className="ContentGroup">      
      <h3>What’s new</h3>
      <ul>
        <li>Supporting multiple agile teams to deliver simple, yet stunning user experiences at  <a href="https://www.open.edu.au/online-courses?view=compare">Open Universities Australia</a></li>
        <li>I have signed up for <a href="https://hells500.com/oldirty/">Hells Ol dirty</a> and <a href="https://www.bicyclenetwork.com.au/rides-and-events/around-the-bay/routes-prices/250km-anticlockwise/">Around the bay</a> bike rides</li>
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
        <Card  
          link="/espn"
          title="ESPN PL" 
          text="AR Design"
          image={require('../images/card-espn.jpg')}
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