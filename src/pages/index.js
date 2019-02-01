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
        <h1>Design to deliver value</h1>
        <h2>I <Link to="/work">design</Link>, <a href="https://medium.com/value-based-design/value-is-the-reuleaux-triangle-of-design-thinking-87e4a388e5a4">write about</a>, and <Link to="/contact">speak on</Link> creating valuable products for mobile apps, and responsive websites.</h2>
        <div className="Logos"></div>
      <Wave />
      </div>
    </div>
    <div className="ContentGroup ContentTop">      
      <h3>Making products come alive</h3>
      <p>Helping companies deliver real value across product design and development, by knowing that they are investing in designing right things. I work with teams, to understand the features that go into the products and make sure they actually solve the underlying customer and business problems. I guide teams to create more valuable design work through strategic design and lean UX practice.</p> 
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-suncorp.jpg')} alt="Three screens from the Suncorp App" /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-appmap.jpg')} alt="Appmap of Suncorp App" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>Hello, nice to meet you.</h3>
      <p>I’m Richard Simms, a Design Lead/Manager. Over the last 15 years, I have designed and developed projects in the digital space, pretty much anything that has a screen. I’ve had the pleasure to work with globally respected brands. Designing human-centered services, transforming ideas into digital products and creating unique customer experiences.</p>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square-mastercard.jpg')} alt="Collection of Mastercard App screens" />
      <img className="Image" src={require('../images/img-portrait-mastercard.jpg')} alt="Single Mastercard screen" />
    </div>
    <div className="ContentGroup">      
      <h3>I believe</h3>
      <p>I help businesses through what the project means for them and their business. To create magic moments, that connects customers with the product or service to help them achieve an experience they desire. By running experiments to generate learnings to improve the product.</p>
      <p><em>Cutting through the random feature list with something valuable. From oh no! To fuck yeah!</em></p>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-et.jpg')} alt="Collection of components" /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-et.jpg')} alt="Close up of single component in iPad" /></imageoverlap>
    </div>
    <Summary 
      title="Who I love to work with"
      text1="For me, it’s important to be sector agnostic. I work with businesses of all scales, from start-ups raising their first funding to global household names. To uncover new opportunities to create a new and unique experience that create value."
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
