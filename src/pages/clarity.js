import React from 'react';
import Layout from '../components/layout';
import "../components/layout.css";
import Form from "../components/form";

const form = () => ( <Layout>
     <blank></blank>
  <div className="HeroGroup">
      <span>Start designing impact, not opinions.</span>
      <h1>Design for clarity when everything is uncertain </h1>    
      <h2>A free guide to teach you how to make profitable design decisions even in these crazy times. </h2> 
      <form name="contact" method="POST" action="/success" data-netlify="true">
       <p><label class="visuallyhidden">Name</label><input type="text" title="name" placeholder="Your name" name="name" /></p>
        <p><label class="visuallyhidden">Email</label><input type="email" placeholder="Your email" name="email" /></p>
         <p><button type="submit">SEND ME THE FREE GUIDE</button></p>
      </form>
      <Form />
    </div>




</Layout>
)
export default form


    