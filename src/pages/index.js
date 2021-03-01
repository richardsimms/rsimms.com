import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Wave from '../components/Wave';
import { Link } from 'gatsby';
import Form from "../components/form";
// import Testimonial from '../components/Testimonial';

const indexPage = () => <Layout>
  <div>
    <div className="Hero">
      <div className="HeroGroup">        
      <Wave />
      </div>
    </div>
    <div className="HeroGroup">
      <span>Start designing impact, not opinions.</span>
      <h1>Design for clarity when everything is uncertain </h1>    
      <h2>Make profitable design decisions even in these crazy times. </h2> 
      <Form />      

    </div>
    
    <div className="ContentGroup">
      <h3>Work with us at <a href="https://www.open.edu.au/">Open University Australia</a></h3>
      <ul>
        <li>Open Universities Australia is a nonprofit marketplace for higher education across Australia that I lead the usability experience.</li>
        <li>As the lead UX designer at Open Universities Australia, I often wear many hats but my focus is always to ensure that the product teams are creating value for the customer.</li>
        <li>Gathering early input and validation from customers to save time and increase confidence. With a cadence of talking to custmers every four days, created empathy and radically improved the perception of how easy it is to work with Open Universities Australia.</li>
      </ul>
    </div>
    <div className="ImageSingle">
      <img className="Image" src={require('../images/watering.jpg')} alt="Watering a plant and a phone on a table" /> 
    </div>
    <div className="ContentBackground">
      <div className="ContentGroup">     
        <h3>Supporting our healthcare heroes </h3>
        <ul>
          <li><Link to="/ronascrubs">I helped a not for profit charity</Link> provide scrubs (uniforms) for healthcare heroes in response to COVID-19. By creating a website that matched local volunteers with healthcare workers who needed scrubs.</li>
          <li>We finished up making over 6,500 free scrubs for healthcare workers across Australia with the help of over 3,000 volunteers and generous donors.</li>
        </ul>
      </div>
    </div> 
    <div className="ImageBlock">
      <img className="Image" src={require('../images/img-square.jpg')} alt="Voluntee cutting fabric from a pattern" />
      <img className="Image" src={require('../images/img-nurse.jpg')} alt="Halthcare workers wearing scrubs" />
    </div>
    <div className="ContentGroup">      
      <h3>Designed a single destination and the place to get your home, car, money and life sorted.</h3>
     <p>I lead and facilitated the <Link to="/suncorp">strategic experience design</Link> of the Suncorp <a href="https://itunes.apple.com/au/app/suncorp-app/id1383025759?mt=8">iOS</a> / <a href="https://play.google.com/store/apps/details?id=au.com.suncorp.marketplace">Android</a> native banking and insurance marketplace. I advocated a user-centered approach in design perspective and practice across the product and stakeholders. Throughout discovery, we continually gathered feedback from customers. We tested everything from the value proposition, the navigation concepts to the desirability of individual features.</p>
    </div>
{/*     <div className="Testimonial">
    <h2>What I've made</h2>
      <div className="TestimonialGroup">
        <Testimonial  
            
            name="Samuel Ladlow"
            title="Creative Director at Tangent" 
            text="As friendly as he is intelligent, Richard always has a way of coming up with great solutions for any UX problem. An excellent collaborator, I would consider Richard a prized asset within any creative team."
            image={require('../images/card-suncorp.jpg')}
          />
        <Testimonial  
            name="Mastercard" 
            title="Mastercard" 
            text="He has the skills to work on a wide range of design technologies. It is rare to find a person who can combine creative flair, innovative design and technical understanding. "
            image={require('../images/card-mastercard.jpg')}
          />
        <Testimonial
            name="European Tour" 
            title="European Tour" 
            text="He is always cool under pressure and understands his customer."
            image={require('../images/card-et.jpg')}
          />

        </div>
    </div>   */}
    <Footer />
  </div>
</Layout>
export default indexPage