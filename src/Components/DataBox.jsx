import React from "react";
import { BiColorFill } from "react-icons/bi";



const DataBox = (props) => {
    return(
    

      <div className="box">
        <div className="box--value">
          <h3>{props.name}</h3>
          <h2>{props.value}</h2>
          <p><span>{props.upicon} </span>{props.rise}</p>
          <span>Since last month</span>
        </div>
        <div className="icon-div" style={props.color}>
          {props.icon}
        </div>
        
      </div>

      
    )
}


export default DataBox;