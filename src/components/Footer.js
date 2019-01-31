import React from 'react';
import Link from 'gatsby-link'


const Footer = props => (
    <div className="FooterGroup">
        <div className="FooterTitleGroup">
            <p><a href="https://www.instagram.com/valuebased.design/channel/">Instagram</a></p>
            <p><Link to="/privacy">Privacy&nbsp;Policy</Link></p>
            <p>©RSIMMS</p>
        </div>
    </div>
)


export default Footer