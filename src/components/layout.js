import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import "./layout.css";



const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>RSIMMS | Value-based Design</title>
      <link rel="canonical" href="https://rsimms.com" />
    </Helmet>
    <Header />
      {children}

  </div>
)


export default Layout

