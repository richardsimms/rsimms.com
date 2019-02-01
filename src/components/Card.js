import React from 'react'
import './Card.css'
import Link from 'gatsby-link'

const Card = props => (
    <Link to={props.link}>
        <div className="Card">
                <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
        </div>
    </Link>
)

export default Card