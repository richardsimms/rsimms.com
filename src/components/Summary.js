import React from 'react'



const Summary = props => (
    <div className="SummaryGroup">
        <div className="SummaryTitleGroup">
            <h3>{props.title}</h3>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
        </div>
    </div>
)


export default Summary