import React from 'react';
import Buildcontrol from './Buildcontrol/Buildcontrol';
import './Buildcontrols.css';

const controls = [
    {label : "Salad", type : "salad"},
    {label : "Bacon", type : "bacon"},
    {label : "Cheese", type : "cheese"},
    {label : "Meat", type : "meat"}
]

const buildcontrols = (props) =>(
    <div className="BuildControls">
    <p>Current Price:<strong>{props.price}</strong></p>
  {controls.map(ctrl =><Buildcontrol key={ctrl.label} type={ctrl.label} Added={() => props.Adding(ctrl.type)} removed={() =>props.removing(ctrl.type)} disabled={props.disabled[ctrl.type]}/>)}
  <button className="OrderButton" disabled={!props.purchase} onClick={props.ordered}>ORDER NOW</button>
    </div>
)


export default buildcontrols;