import React from 'react';


const Banner = props => (
    <div className="BannerGroup" image={props.image} alt={props.title}>
        <div className="BannerTitleGroup">
                <p className="BannerTitle">{props.title}</p>
        </div>
    </div>
)
export default Banner