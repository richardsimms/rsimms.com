import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import Content from '../components/Content';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ReactPlayer from 'react-player';

const ESPNPage = () => (
    <div>
    <Banner 
      image={require('../images/hero-espn.jpg')}
      title="ESPN"
      text="Even if we are designing things right, which we do. Teams today are all too often feature factories. With little knowledge for if the features actually solve the underlying business problems."
    />
    <div className="ContentGroup">      
      <h3>AR Presenter’s Touchscreen </h3>
      <p>In 2011, ESPN needed an innovative, 21st Century design concept to visualise and demonstrate tactics to up to one and a half million viewers of their English Premier League show each Saturday.</p>
      <p>The challenge was to create an environment which allowed football pundits to analyse tactics and formations in a full 3D environment.</p>
    </div>
    <div className="video">
      <ReactPlayer url='https://vimeo.com/54402005' playing loop 
        width='100%'
        height='100%'
      />
    </div>
    <div className="ContentGroup">      
      <h3>Our approach</h3>
      <p>The biggest hurdle to overcome was deciding how to improve upon the traditional methods that sports broadcasters had been using for decades, i.e. the 2D, wall mounted, flat, touch screen TV approach.</p>
      <p>Echoing Tony Adams’ advice on the off-side rule and surely millions of viewers’ thoughts, ESPN agreed that presenters having to turn their back on the viewer to discuss tactics with them was far from ideal.</p>
      <p>To find a solution, we were going to have to re-invent the wheel; or rather... the ball.</p>
    </div>
    <div className="video">
      <ReactPlayer url='https://vimeo.com/54403650' playing loop 
        width='100%'
        height='100%'
      />
    </div>
    <div className="ContentGroup">      
      <p>Working closely with ESPN and IMG, we solved the problem by introducing a truly 21st century concept - animated, moveable football players standing on a horizontal touchscreen on a table. </p>
      <p>This way, pundits could manoeuvre freely around the table, move augmented graphics on the screen’s surface and discuss tactics... all the while facing the viewer. </p>
      <p>Presenters could highlight areas of the pitch or single out players by throwing them off the table to reveal a pre-recorded clip - an avatar of the player standing in the studio along with more detailed statistics. </p>
      <p>While this approach would be a television first - the first time AR was were used within a UK sports environment - presenters and viewers alike were sure to feel at home with the familiarity of a fussball-style table and Subbuteto-Like virtual player avatars.</p>
    </div>
    <Summary 
      title=""
      text1="Each week, in an intensely collaborative, ongoing process, in order to have everything perfect for Saturday’s matches, we would begin creating graphics, rehearsals, testing and fine-tuning improvements on Thursdays."
      text2="After the success of the first season’s augmented graphics, a second season was requested and further developments were made for 2012."
    />
    
    <div className="Cards">
     <h2>Recent work</h2>
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
            link="espn"
            title="ESPN PL" 
            text="AR Design"
            image={require('../images/card-espn.jpg')}
          />
        </div>
    </div>


    <Footer />
  </div>
)

export default ESPNPage
