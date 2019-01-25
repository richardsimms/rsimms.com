import React from 'react';



const Banner = props => (
   <div class="SectionGroup">
   <img src={props.image} alt={props.title} />
        <div class="SectionTitleGroup">
            <div class="SectionTitle">{props.title}</div>
        </div>
    </div>
)


export default Banner