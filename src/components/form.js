import React from "react";
import "../components/layout.css";

export default function App() {

  return (
    <form name="Newsletter" method="POST" netlify="true" action="/find-clarity-in-uncertainty.pdf">
        <input type="hidden" name="form-name" value="Newsletter" />
        <p><label class="visuallyhidden">Your Name: <input type="text" name="name" placeholder="Your name" /></label></p>
        <p><label>What’s your best email address? <input type="email" name="email" placeholder="Your email" required /></label></p>
        <p><button type="submit">SEND ME THE FREE GUIDE</button></p>
      </form>
  );
}
