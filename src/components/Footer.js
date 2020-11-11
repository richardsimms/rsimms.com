import React from 'react';
import Link from 'gatsby-link';

const Footer = props => (
    <div className="FooterGroup">
        <div className="FooterTitleGroup">
            <h3>Want to stay up-to-date?</h3>
            <p>Read <a href="http://vbd.substack.com">my newsletter</a>, where I share strategies and insights on value-based design.</p>
            <p>If you’re looking for a designer to help define your customers experience to deliver business growth—<Link to="/contact">let’s chat.</Link></p>
            <br />
            <span>Website design and content &#169; {new Date().getFullYear()}, Richard&nbsp;Simms</span>
        </div>
    </div>
)
export default Footer