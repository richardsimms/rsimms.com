import React from 'react';
import Wave from '../components/Wave';
import Footer from '../components/Footer';
import Layout from '../components/layout';


const reuleauxTrianglePage = () => <Layout>
  <div>
    <div>
      <div className="Hero">
        <div className="HeroGroup">
          <h1>Value is the Reuleaux triangle of Design Thinking</h1>
        <Wave />
        </div>
      </div>
    </div>
    <div className="ContentGroup ContentTop">      
      <p><a href="https://en.wikipedia.org/wiki/Reuleaux_triangle">Reuleaux</a> is the triangle formed at the centre of Venn diagrams. The three intersecting circles of <b>desirability</b>, <b>feasibility</b> and <b>viability</b> that forms Design Thinking. Which often refers to Reuleaux triangle as innovation in many models and describes an idea or solution, where value-based design focuses on the value created for organisations and people. It increase your confidence in making the right product decisions, through testing and optimising the return on investment of a vision. So before you write any code or decide on any a feature we need to understand the potential value.</p>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square.jpg')} alt="Mobile shopping concepts" />
    </div>
    <div className="ContentGroup">
      <h3>How to test and optimise the ROI of a vision</h3>
      <q>Today we are all too often <b>feature factories</b>, with little regard for whether the features actually solve the underlying business problems.</q>
      <p>A value-based design process can deliver real value to clients. This will help to establish yourself as a trustworthy digital partner. Value-design keeps us focused on outcomes, and forces us to check as we build how our product works and what it accomplishes.</p> 
      <p>The <b>inconvenient</b> truth about product design, <a href="https://svpg.com/the-inconvenient-truth-about-product/">Marty Cagan</a> states that at least half of the ideas are just not going to work. Even when we do find the ideas that are valuable, usable and feasible. It takes many iterations to get the implementation of this idea to the point where it actually delivers the expected customer and business value.</p>
      <p>There are many reasons for an idea to not work out. The most common is that the customers aren't as excited about this idea as we are, so they choose not to use it. When they do want to use it, if it's so complicated that it's simply more trouble than it's worth, this yields the same result. Even when we validate that customers will love it, it can become much more involved to build than we thought. We simply can't afford the time and money to deliver.</p>
    </div>
    <div className="ImageOverlap">
    <imageoverlap><img className="Image" src={require('../images/img-large.jpg')} alt="Illustration of a lady sitting on a phone" /></imageoverlap>
    <imageoverlap><img className="Image" src={require('../images/img-small.jpg')} alt="Illustration of collaboration" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>How to change the conversation</h3>
      <p>Value-based design is to fundamentally change focus from outputs to outcomes. Many of our beliefs about users, their problems, and possible solutions are assumptions that need to be tested. We can do this by building in small, iterative pieces with the goal of learning whether our assumptions are well-founded - and ultimately whether our ideas or features will have the outcomes we want, both for the business and for our end users.</p>
    </div>
    <Footer />
  </div>
</Layout>

export default reuleauxTrianglePage
