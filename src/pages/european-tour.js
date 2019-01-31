import React from 'react'
import Card from '../components/Card';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player';
import Layout from '../components/layout';
import "../components/layout.css";

const etPage = () => <Layout>
  <div>
  <div className="BannerET">
      <div className="SectionTitleGroup">
        <div className="SectionTitle"><h3>European tour</h3></div>
      </div>
    </div>
    <div className="ContentGroup">      
      <h3>European Tour Website</h3>
      <p>The PGA wanted a new website to showcase the live, at-event experience of their premiere golf stage - The European Tour.</p>
      <p>This would be quite some feat because The European Tour competition is a year-long Race to Dubai, where the winner is crowned and covers 47 tournaments across 26 countries.</p>
    </div>
    <div className="ImageOverlap">
        <imageoverlap><img className="Image" src={require('../images/img-large-et.jpg')} alt="Collection of components" /></imageoverlap>
        <imageoverlap><img className="Image" src={require('../images/img-small-et.jpg')} alt="Close up of component in iPad" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <h3>Approach</h3>
      <p>Working in small teams, we designed the site one section at a time. I lead a visual and UX team across key pages in five intensive two-week sprints.</p>
      <p>In each sprint, we defined and overcame challenges by interviewing stakeholders; refining ideas and presenting wireframes and flows to the client throughout.</p>
      <p>Employing InVisions Craft to keep the teams aligned and storing our component library in Zeplin, we built prototypes of the interactions; from micro-interactions to full page flows.</p>
      <p>These accompanied annotations and production access of the design ready to be built in Sitecore.</p>
    </div>
    <div className="videop">
        <ReactPlayer url='https://vimeo.com/205206244' playing loop 
            width='65%'
            height='100%'
        />
        <ReactPlayer url='https://vimeo.com/205206187' playing loop 
            width='65%'
            height='100%'
        />
    </div>
    <Summary 
      title="Solution"
      text1="We delivered a site with performance at its heart, to serve the fans with the first and fastest live scores and the latest news from nearly fifty tournaments around the world."
      text2="The multi-faceted site incorporates real-time leaderboards, video replays, galleries, player profiles and up-to-the-minute written word articles so golf fans can follow all the action as if they were teeing off next to the pros at The Masters or Ryder Cup themselves."
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
            image={require('../images/card-mastercard.jpg')}
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

export default etPage
