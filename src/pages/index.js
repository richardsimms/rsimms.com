import React from 'react';
import Layout from '../components/layout';
import Card from '../components/Card';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import Wave from '../components/Wave';
import Link from 'gatsby-link';

const indexPage = () => <Layout>
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Using research to define strategies that delivers business growth</h1>
      <Wave />
      </div>
    </div>
    <div className="ContentGroup ContentTop">      
      <h3>Listening to your customers is good business</h3>
      <p>I help businesses of all sizes to optimise their digital strategy, create and capture measurable outcomes by researching what their customers really want.</p>
       <p>I’ve learned that most digital businesses have little knowledge of what features actually solve the underlying business outcomes. So, I've created a reliable way for businesses to get started: by thinking about customers’ behaviour, responding to their needs, generating opportunities and fixing any experience issues.</p>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-suncorp.jpg')} alt="Three screens from the Suncorp App" /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-appmap.jpg')} alt="Appmap of Suncorp App" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>Most businesses get feature development wrong.</h3>
      <p>They fail to define success, or they don't know how the outcomes are routed back to their business goals. I work to a  process that draws on years of experience to make value-based design decisions. </p>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square-mastercard.jpg')} alt="Collection of Mastercard App screens" />
      <img className="Image" src={require('../images/img-portrait-mastercard.jpg')} alt="Single Mastercard screen" />
    </div>
    <div className="ContentGroup">      
      <h3>What’s new</h3>
      <ul>
        <li>I have a new <Link to="/work">portfolio</Link> of work</li>
        <li>I wrote about <a href="https://medium.com/value-based-design/value-is-the-reuleaux-triangle-of-design-thinking-87e4a388e5a4">Value-based d esign</a>, to show how to deliver value and how you can increase your confidence in making the right product decisions</li>
      </ul>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-et.jpg')} alt="Collection of components" /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-et.jpg')} alt="Close up of single component in iPad" /></imageoverlap>
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
