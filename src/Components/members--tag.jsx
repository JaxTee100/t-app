import React from "react";


const Members = (props) => {
    return(
        <div className="member">
            <img src={props.img} alt="img"/>
            <div id="title">
                <h4>{props.name}</h4>
                <p>{props.position}</p>
            </div>
            <div id="plus">+</div>

        </div>
    )
}
export default Members;