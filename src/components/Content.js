import React from 'react'
import './Content.css'

const Content = props => (
    <div className="Content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Content