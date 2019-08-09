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
        <h1>Using research to define strategies that delivers business growth</h1>
        <logo></logo>
      <Wave />
      </div>
    </div>
    <div className="ContentGroup ContentTop">
      <h3>Listening to your customers is good business</h3>
      <p>I help businesses of all sizes to optimise their digital strategy, create and capture measurable outcomes by researching what their customers really want.</p>
       <p>I’ve learned that most digital businesses have little knowledge of what features actually solve the underlying business outcomes. So, I've created a reliable way for businesses to get started: by thinking about customers’ behaviour, responding to their needs, generating opportunities and fixing any experience issues.</p>
    </div>
    <div className="ImageOverlap">
    <imageoverlap><Img className="Image" fluid={data.image1.childImageSharp.fluid} alt="Three screens from the Suncorp App" /></imageoverlap>
    <imageoverlap><Img className="Image" fluid={data.image2.childImageSharp.fluid} alt="Appmap of Suncorp App" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>Most businesses get feature development wrong.</h3>
      <p>They fail to define success, or they don't know how the outcomes are routed back to their business goals. I work to a  process that draws on years of experience to make value-based design decisions. </p>
    </div>
    <div className="ImageBlock">
      <Img className="Image" fluid={data.image3.childImageSharp.fluid} alt="Collection of Mastercard App screens" />
      <Img className="Image" fluid={data.image4.childImageSharp.fluid} alt="Single Mastercard screen" />
    </div>
    <div className="ContentGroup">      
      <h3>What’s new</h3>
      <ul>
        <li>I have a new <Link to="/work">portfolio</Link> of work</li>
        <li>I wrote about <a href="https://medium.com/value-based-design/value-is-the-reuleaux-triangle-of-design-thinking-87e4a388e5a4">Value-based d esign</a>, to show how to deliver value and how you can increase your confidence in making the right product decisions</li>
      </ul>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><Img className="Image" fluid={data.image5.childImageSharp.fluid} alt="Collection of components" /></imageoverlap>
      <imageoverlap><Img className="Image" fluid={data.image6.childImageSharp.fluid} alt="Close up of single component in iPad" /></imageoverlap>  
    </div>
    <Summary 
      title="&#128075; Hello, nice to meet you!"
      text1="Richard Simms is a designer from London, UK living in Melbourne, Australia. Over the last 15 years, I have designed and developed projects in the digital space, pretty much anything that has a screen. I’ve had the pleasure to work with globally respected brands. In his spare time, he cycles, travels, cooks and is a proud father."
    />
    <div className="Cards">
     <h2>What I've made</h2>
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
      fluid {
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