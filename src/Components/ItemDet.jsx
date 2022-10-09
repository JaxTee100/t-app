import React from "react";


const ItemDet = (props) => {
    return(
        <div className="item--tile">
            <img src={props.img} alt="img" />
            <div className="text">
                <h4>{props.name}</h4>
                <p>{props.date}</p>
            </div>
            <div className="tag" style={props.color}>
                {props.tag}
            </div>
        </div>
    )
}


export default ItemDet;