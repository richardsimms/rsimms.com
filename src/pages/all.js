import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import Header from '../components/header';
import '../layouts/index.css';

const IndexPage = () => (
  <div>
  <Header />
    <div>
      <div className="Hero">
      
        <div className="HeroGroup">
          <h1>Learn to deliver value for all your work</h1>
          <h2>Design methods and principles that you can put to work right away on a product and a variety of projects.</h2>
          <Link to="/video">Learn it for free</Link>
          <p>Get the 7 days free email course</p>
          <div className="Logos">
            <img src={require('../images/logo-sketch.png')} alt="" width="50px" />
            <img src={require('../images/logo-figma.png')} alt="" width="50px" />
            <img src={require('../images/logo-framer.png')} alt="" width="50px" />
            <img src={require('../images/logo-studio.png')} alt="" width="50px" />
            <img src={require('../images/logo-swift.png')} alt="" width="50px" />
            <img src={require('../images/logo-react.png')} alt="" width="50px" />
          </div>
        <Wave />
        </div>
      </div>
    </div>
    <div className="ContentGroup">      
      <h3>Design the right thing</h3>
      <p>Even if we are designing things right, which we do. Teams today are all too often feature factories. With little knowledge for if the features actually solve the underlying business problems.</p> 
      <p>Learn to focus on delivering value for business and customers. This email course will be your guide to create more valuable design work. Made for those looking to move into Strategic Design roles or those looking to add UX Strategy to their skillset.</p>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square.png')} alt="" />
      <img className="Image" src={require('../images/img-portrait.png')} alt="" />
    </div>
    <div className="ContentGroup">      
      <h3>Digital products</h3>
      <p>The products we design are having more of an impact than ever. Learn to deliver real value for your company and for the customers. Through continuously experimenting, measuring and building.</p> 
      <ul>
        <li>Running an experiment which generates a learning which allows the product to improve</li>
        <li>Generate learning that stops work on a product/feature that does not meet a customer need</li>
        <li>Launching a product or feature which helps a business move towards achieving their KPI(s)</li>
      </ul>
      <p><em>This course aims to solve these questions. Cut through the Random feature list with something valuable. From oh no! To fuck yeah!</em></p>
    </div>
    <div className="ImageOverlap">
    <imageoverlap><img className="Image" src={require('../images/img-large.png')} alt="" /></imageoverlap>
    <imageoverlap><img className="Image" src={require('../images/img-small.png')} alt="" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>Add value to your design process</h3>
      <p>This course will help you better understand the why behind every project. It will help you make sure that what you end up doing aligns perfectly with their business objectives.</p>
    </div>
    <Summary 
      title="App launch 🚀 "
      text1="The iOS and Android apps launched with a fast and secure access to bank accounts. Categorised transactions, transfer money, pay bills and make payments."
      text2="Self-serves across Car, Home and Life Insurance, from updating address, pay renewals and new quotes. Make a claim and to be able to track the entire process from start to finish."
      text3="Suncorp App’s also has a Virtual Assistant chatbot powered by Microsoft Watson to answer questions about specific bank accounts and insurance policies."
    />
    <div className="Cards">
     <h2>Recent work</h2>
      <div className="CardGroup">
        <Card  
          title="Deisgners Systems" 
          text="Design tininking"
          image={require('../images/wallpaper.jpg')}
          />
        <Card  
          title="React for Deisgners" 
          text="12 sections"
          image={require('../images/wallpaper2.jpg')}
          />
        <Card  
          title="Sound Deisgn" 
          text="12 sections"
          image={require('../images/wallpaper3.jpg')}
          />
        <Card  
          title="AR Kit" 
          text="12 sections"
          image={require('../images/wallpaper4.jpg')}
          />
        </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')} 
      title="React for designers"
      text="Even if we are designing things right, which we do. Teams today are all too often feature factories. With little knowledge for if the features actually solve the underlying business problems."
    />
    <Footer />
  </div>
)

export default IndexPage
