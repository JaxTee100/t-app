import React from "react";
import * as AiIcons from "react-icons/ai"

import * as MdIcons from "react-icons/md"
import { NavContainer, NavList, NavListItem, NavListItemD, NavImage, NavList2, NavImage2 } from "./NavbarElement";




const Navbar =({sidebar, adjust,button}) => {
    return(
      <>
        <NavContainer sidebar={sidebar}>
          {button ?
          <NavList>
              <NavListItem to="/" onClick={adjust}>{sidebar ? <MdIcons.MdDoubleArrow />: <MdIcons.MdMenuOpen/> }</NavListItem>
              <NavListItem to="/"><MdIcons.MdContacts /></NavListItem>
              <NavListItemD to="/"><MdIcons.MdOutlineChat /></NavListItemD>
              <NavListItem to="/"><AiIcons.AiOutlineSetting /></NavListItem>
              <NavListItem to="/"><NavImage src="./images/usa.jpeg" alt="img" /></NavListItem>
              <NavListItem to="/"><NavImage src="./images/asian-lady.jpeg" /></NavListItem>
            
          </NavList>
            :
          <NavList2>
            <NavImage2 src="./images/vlogo2.png" alt="img"/>
            <NavListItem to="/" onClick={adjust}><MdIcons.MdOutlineMenu /></NavListItem>
            <NavListItem to="/"><NavImage src="./images/usa.jpeg" alt="img" /></NavListItem>
            <NavListItem to="/"><NavImage src="./images/asian-lady.jpeg" /></NavListItem>
          </NavList2>}
        </NavContainer>
      </>
    )
}

export default Navbar;