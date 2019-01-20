import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import Content from '../components/Content';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

const SecondPage = () => (
  <div>
  <Banner 
    image={require('../images/hero-et.jpg')}
    title="React for designers"
    text="Even if we are designing things right, which we do. Teams today are all too often feature factories. With little knowledge for if the features actually solve the underlying business problems."
  />
    <div className="ContentGroup">      
      <h3>Making products come alive</h3>
      <p>Helping companies deliver real value across product design and development, by knowing that they are investing in designing right things. I work with teams, to understand the features that go into the products and make sure they actually solve the underlying customer and business problems. I guide teams to create more valuable design work through strategic design and lean UX practice.</p> 
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-et.jpg')} /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-et.jpg')} /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>👋 Hello, nice to meet you.</h3>
      <p>I’m Richard Simms, a Design Lead/Manager. Over the last 15 years, I have designed and developed projects in the digital space, pretty much anything that has a screen. I’ve had the pleasure to work with globally respected brands. Designing human-centered services, transforming ideas into digital products and creating unique customer experiences.</p>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square-rsimms.jpg')} />
      <img className="Image" src={require('../images/img-portrait-rsimms.jpg')} />
    </div>
    <div className="ContentGroup">      
      <h3>I believe</h3>
      <p>I help businesses through what the project means for them and their business. To create magic moments, that connects customers with the product or service to help them achieve an experience they desire. By running experiments to generate learnings to improve the product.</p>
      <p><em>Cutting through the random feature list with something valuable. From oh no! To fuck yeah!</em></p>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-coutts.jpg')} /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-sky.jpg')} /></imageoverlap>
    </div>
    <Summary 
      title="Who I love to work with"
      text1="For me, it’s important to be sector agnostic. I work with businesses of all scales, from start-ups raising their first funding to global household names. To uncover new opportunities to create a new and unique experience that create value."
    />
    <div className="Cards">
     <h2>Recent work</h2>
      <div className="CardGroup">
        <Card  
          title="Suncorp App" 
          text="UX Design & Strategy"
          image={require('../images/card-suncorp.jpg')}
          />
        <Card  
          title="Mastercard" 
          text="UX & UI Design"
          image={require('../images/card-mastercard.jpg')}
          />
        <Card  
          title="European Tour" 
          text="UX Design"
          image={require('../images/card-et.jpg')}
          />
        <Card  
          title="ESPN PL" 
          text="AR Design"
          image={require('../images/card-espn.jpg')}
          />
        </div>
    </div>


    <Footer />
  </div>
)

export default SecondPage
