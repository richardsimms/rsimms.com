import React from 'react';
import Layout from '../components/layout';
import Card from '../components/Card';
import Footer from '../components/Footer';

const indexPage = () => <Layout>
  <div>
    <div className="BannerMastercard">
      <div className="SectionTitleGroup">
        <div className="SectionTitle"><h3>Showcase</h3></div>
      </div>
    </div>
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
