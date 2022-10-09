import React from "react";
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as MdIcons from "react-icons/md"
import * as TiIcons from "react-icons/ti"
import * as BiIcons from "react-icons/bi"



const Navbar =() => {
    return(
        <nav className="nav--item">
        <ul className="nav--list">
          <li className="list-circles"><a href="#"><MdIcons.MdMenuOpen /></a></li>
          <li className="list-circles"><a href="#"><MdIcons.MdContacts /></a></li>
          <li className="list-circles right-auto"><a href="#"><MdIcons.MdOutlineChat /></a></li>
          <li className="list-circles"><a href="#"><AiIcons.AiOutlineSetting /></a></li>
          <li className="list-circles"><a href="#"><img src="./images/usa.jpeg" alt="img" /></a></li>
          <li className="list-circles"><a href="#"><img src="./images/asian-lady.jpeg" /></a></li>
        
        </ul>
      </nav>
    )
}

export default Navbar;