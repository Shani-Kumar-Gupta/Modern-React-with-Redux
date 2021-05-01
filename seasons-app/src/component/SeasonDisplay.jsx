import React from 'react'
import { seasonConfig, getSeason } from '../helper';
import '../css/SeasonDisplay.css';

const SeasonDisplay = (props) => {
    const {lat} = props;
    const season = getSeason(lat, new Date().getMonth());
    // const text = season === 'Winter' ? "Burr! It is chilly" : "Let's hit the beach";
    // const icon = season === 'Winter' ? 'snowflake' : 'sun';
    const data = seasonConfig[season];
    console.log(data);

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${data.iconName} icon`} />
            <h1>{data.text}</h1>
            <i className={`icon-right massive ${data.iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay
