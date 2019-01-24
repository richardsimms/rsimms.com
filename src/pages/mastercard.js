import React from 'react'
import Card from '../components/Card';
import Summary from '../components/Summary';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ReactPlayer from 'react-player';
import Layout from "../components/layout"


const MastercardPage = () => <Layout>
    <div>
    <Banner 
      image={require('../images/hero-mastercard.jpg')}
      title="Mastercard"
      text=""
    />
    <div className="ContentGroup">      
      <h3>Airline Loyalty Programme Experience</h3>
      <p>MasterCard wanted to expand their business into the loyalty programme sector, so needed a prototype app they could pitch to other businesses.</p>
      <p>To compete in a marketplace famed for high uptake and dwindling users, MasterCard were going to need something special - a product that could rekindle the romance between loyal customer and reward points.</p>
      <p>Therefore, our challenge was twofold. Not only did they require a stunning, easy to understand, engaging product but in order to succeed, it was going to have to revolutionise the loyalty programme industry.</p>
    </div>
    <div className="video">
      <ReactPlayer url='https://vimeo.com/203381109' playing loop 
        width='100%'
        height='100%'
      />
    </div>
    <div className="ContentGroup">      
      <h3>Our approach</h3>
      <p>Before I could even begin overseeing this end-to-end user experience, the first problem to figure out was why this disconnect between high uptake and low points collection was happening.</p>
      <p>My research began by running stakeholder workshops and interviewing customers to define both the client's and end-customer’s needs.</p>
      <p>Luckily, I was able to identify the core issues almost immediately:</p>
      <ul>
          <li>Customers did not understand the value of their points; we needed to demystify the whole process and highlight missed opportunities with a bank statement-like option.</li>
          <li>People sign up with airline credit cards to accumulate air miles or save for specific goals. We needed to help them set goals more easily, utilise time frames and encourage social  media sharing.</li>
          <li>Naturally, people’s use of credit cards changes as their lifestyle changes. At present there was no way for the loyalty programme to react to this. The right app needed to capture relevant data to understand when these changes occur, then launch personalised, targeted offers accordingly.</li>
      </ul>
    </div>
    <div className="ImageOverlap">
      <imageoverlap><img className="Image" src={require('../images/img-large-mastercard.jpg')} alt="" /></imageoverlap>
      <imageoverlap><img className="Image" src={require('../images/img-small-mastercard.jpg')} alt="" /></imageoverlap>
    </div>
    <div className="ContentGroup">      
      <p>We delivered a high-fidelity, interactive, clickable prototype or customers to access via their smartphones. Featuring 48 demo screens which could be used in a free flow manner via our hidden, built-in menu system to start each journey.</p>
      <p>We created bespoke a micro-interaction pattern system featuring ‘confirmation button behaviour’ to give customers a strong feeling of completion.</p>
    </div>
    <div className="ImageBlock">
      <img className="Image" src={require('../images/1480267931265.gif')} alt="" />
      <img className="Image" src={require('../images/1480268875443.gif')} alt="" />
    </div>
    <Summary 
      title="I designed and lead my team to create visuals for a high-fidelity prototype"
      text1="We showcased an amazing app which featured a dynamic transaction history, a digital wallet and tailored rewards. Utilising clean, modern circle design to help guide customers though every stage of the app and leave them with a unique and satisfying user experience."
      text2="Using our prototype, Mastercard went on to pitch to other businesses including British Airways, Virgin, Avios and Lloyds Bank."
      text3="I’m proud of the product we created, the valuable opportunities it provides to our client and their customers."
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

export default MastercardPage
