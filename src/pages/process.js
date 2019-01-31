import React from 'react';
import Wave from '../components/Wave';
import Footer from '../components/Footer';
import Layout from '../components/layout';


const vauleBasedDesignPage = () => <Layout>
  <div>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>At the centre of human-centred design lies value</h1>
          <h2>These are the methods and principles I practice to create amazing products. Though continuous research, measurement, and experimentations to increase confidence and put value at the centre of my work.</h2>
          <p><a href="https://medium.com/value-based-design/value-is-the-reuleaux-triangle-of-design-thinking-87e4a388e5a4">Read more on Medium</a></p>
          <div className="Logos">
            <img src={require('../images/logo_lean-startup.png')}  width="50px" alt="Lean Startup" />
            <img src={require('../images/logo-mtp.png')}  width="50px" alt="Mind the Product" />
            <img src={require('../images/logo_svpg.png')}  width="50px" alt="SVPG" />
            <img src={require('../images/logo_ideo.png')}  width="50px" alt="Ideo" />
            <img src={require('../images/logo_cowan.png')}  width="50px" alt="Alexander Cowan" />
            <img src={require('../images/logo_gv.png')}  width="50px" alt="Google Ventures" />
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
      <img className="Image" src={require('../images/img-square.png')} alt="Mobile shopping concepts" />
      <img className="Image" src={require('../images/img-portrait.png')} alt="E Commerce Overview screen" />
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
    <imageoverlap><img className="Image" src={require('../images/img-large.png')} alt="Illustration of a lady sitting on a phone" /></imageoverlap>
    <imageoverlap><img className="Image" src={require('../images/img-small.png')} alt="Illustration of collaboration" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>Add value to your design process</h3>
      <p>This course will help you better understand the why behind every project. It will help you make sure that what you end up doing aligns perfectly with their business objectives.</p>
    </div>
    <Footer />
  </div>
</Layout>

export default vauleBasedDesignPage
