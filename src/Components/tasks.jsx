import React from "react";
import * as MdIcons from "react-icons/md"


const Task = (props) => {
    return(
        <div className="tabs" id="tasks--tab">
            <div className="top--tile">
                <div id="white--black" ></div>
                <h4>{props.task}</h4>
                <MdIcons.MdMoreVert  className="icon"/>
            </div>
            <div className="body--cont">
                <div className="colored--patch" style={props.color}></div>
                <p>Culpa sint aliqua adipisicing officia
                     aliquip excepteur occaecat dolor 
                     velit culpa ullamco.
                </p>
            </div>
            <div className="package"></div>
        </div>
    )
}

export default Task;