import React from 'react';
import './Buildcontrol.css';

const buildcontrol =(props) =>(
    <div className="BuildControl">
        <div className="Label">{props.type}</div>
        <button className="Less" onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className="More" onClick={props.Added}>More</button>
       
    </div>
)



export default buildcontrol;