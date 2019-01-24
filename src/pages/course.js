import React from 'react'
import Wave from '../components/Wave';
import Footer from '../components/Footer';
import '../layouts/index.css';
import Header from '../components/header';

const vauleBasedDesignPage = () => (
  <div>
  <Header />
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Learn to deliver value for all your work</h1>
          <h2>Design methods and principles that you can put to work right away on a product and a variety of projects.</h2>
          <a href="http://valuebased.design/Value-based-design.pdf">Downlaod it for free</a>
          <p></p>
          <div className="Logos">
            <img src={require('../images/logo-lean_startup.png')}  width="50px" alt="" />
            <img src={require('../images/logo-figma.png')}  width="50px" alt="" />
            <img src={require('../images/logo-framer.png')}  width="50px" alt="" />
            <img src={require('../images/logo-studio.png')}  width="50px" alt="" />
            <img src={require('../images/logo-swift.png')}  width="50px" alt="" />
            <img src={require('../images/logo-react.png')}  width="50px" alt="" />
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
    <Footer />
  </div>
)

export default vauleBasedDesignPage
