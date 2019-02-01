import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import "./layout.css";



const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RSIMMS | Value-based Design</title>
      <meta name="Description" content=" Richard Simms, a Design Lead. Over the last 15 years, I have designed and developed projects in the digital space, pretty much anything that has a screen." />

      <link rel="canonical" href="https://rsimms.com" />
      <html lang="en" />
    </Helmet>
    <Header />
      {children}
  </div>
)

export default Layout