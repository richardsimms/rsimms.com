import React from 'react'
import './Testimonial.css'
import Link from 'gatsby-link'

const Testimonial = props => (
    <Link to={props.link}>
        <div className="Testimonial">
                <img src={props.image} alt={props.title} />
                <p>{props.text}</p>
                <h3>{props.title}</h3>
                <h3>{props.name}</h3>
        </div>
    </Link>
)

export default Testimonial