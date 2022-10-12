import React from "react";
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as MdIcons from "react-icons/md"
import * as TiIcons from "react-icons/ti"
import * as BiIcons from "react-icons/bi"
import * as HiIcons from "react-icons/hi"
import { 
  SidebarContainer, 
  SidebarLogo, 
  Logo, 
  LogoTitle, 
  SidebarTag, 
  SidebarTitle, 
  SidebarItems, 
  SidebarLinkTitle, 
  SidebarLink,
  SidebarDropdown,
  Tag 
} from "./SidebarElements";


const Sidebar = ({sidebar}) =>{


const [caretDown1, setCaretDown1] = React.useState(true)
const caretClick1 = () => {
 setCaretDown1(prev =>!prev)
}
const [caretDown2, setCaretDown2] = React.useState(false)
const caretClick2 = () => {
 setCaretDown2(prev =>!prev)
}
const [caretDown3, setCaretDown3] = React.useState(false)
const caretClick3 = () => {
 setCaretDown3(prev =>!prev)
}
const [caretDown4, setCaretDown4] = React.useState(false)
const caretClick4 = () => {
 setCaretDown4(prev =>!prev)
}
const [caretDown5, setCaretDown5] = React.useState(false)
const caretClick5 = () => {
 setCaretDown5(prev =>!prev)
}
const [caretDown6, setCaretDown6] = React.useState(false)
const caretClick6 = () => {
 setCaretDown6(prev =>!prev)
}
const [caretDown7, setCaretDown7] = React.useState(false)
const caretClick7 = () => {
 setCaretDown7(prev =>!prev)
}



  return(
    <>
      
    <SidebarContainer sidebar={sidebar}>
      <SidebarLogo sidebar={sidebar}>
        <Logo src="./images/vlogo2.png" alt="img" />
        { !sidebar && <LogoTitle sidebar={sidebar}>Vuse Admin</LogoTitle>}
      </SidebarLogo>
      

      <SidebarItems>
        <SidebarLink>
          <SidebarTag><RiIcons.RiDashboardFill/></SidebarTag>
          <SidebarLinkTitle className="light-blue">Dashboard</SidebarLinkTitle>
          {caretDown1 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick1}/>:<AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick1}/>}
        </SidebarLink>

        {caretDown1 && <SidebarLink>
          <SidebarTag>OP</SidebarTag>
          <SidebarLinkTitle>Operational</SidebarLinkTitle>

        </SidebarLink>}

      
        <SidebarLink>
          <SidebarTag >AN</SidebarTag>
          <SidebarLinkTitle>Analytical</SidebarLinkTitle>

        </SidebarLink>

        
          <SidebarTitle>{!sidebar ? "App" : <HiIcons.HiDotsHorizontal />}</SidebarTitle>  
          <SidebarLink>
            <SidebarTag><MdIcons.MdContacts /></SidebarTag>
            <SidebarLinkTitle>Analytical</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <SidebarTag><AiIcons.AiOutlineMessage/></SidebarTag>
            <SidebarLinkTitle>Chat</SidebarLinkTitle>
          </SidebarLink>
            
          
        

          <SidebarTitle>{!sidebar ? "Style & User Interface" : <HiIcons.HiDotsHorizontal />}</SidebarTitle>
        <SidebarLink>
          <SidebarTag><MdIcons.MdOutlineColorLens/></SidebarTag>
          <SidebarLinkTitle>Color</SidebarLinkTitle>
        </SidebarLink>
        
      
          <SidebarLink>
            <SidebarTag><AiIcons.AiOutlinePicture/></SidebarTag>
            <SidebarLinkTitle>Icons</SidebarLinkTitle>
          </SidebarLink>

          <SidebarLink>
            <SidebarTag><AiIcons.AiOutlineQuestionCircle/></SidebarTag>
            <SidebarLinkTitle>Helpers</SidebarLinkTitle>
          </SidebarLink>

          <SidebarLink>
            <SidebarTag><AiIcons.AiOutlineBorderHorizontal/></SidebarTag>
            <SidebarLinkTitle>Border Radius</SidebarLinkTitle>
            <Tag>new</Tag>
          </SidebarLink>

          <SidebarLink>
            <SidebarTag>TT</SidebarTag>
            <SidebarLinkTitle>Text & Typography</SidebarLinkTitle>
            <Tag>new</Tag>
          </SidebarLink>
          <SidebarLink>
            <SidebarTag><AiIcons.AiOutlinePlaySquare/></SidebarTag>
            <SidebarLinkTitle>Motion</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <SidebarTag>PR</SidebarTag>
            <SidebarLinkTitle>Programmatic Scrolling</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <SidebarTag><AiIcons.AiOutlineForm/></SidebarTag>
            <SidebarLinkTitle>Forms</SidebarLinkTitle>
          </SidebarLink>
        

        
          <SidebarTitle>Pages</SidebarTitle>
          <SidebarLink>
          <SidebarTag><MdIcons.MdPeopleOutline/></SidebarTag>
            <SidebarLinkTitle>Profile</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <SidebarTag><MdIcons.MdOutlineTimer /></SidebarTag>
            <SidebarLinkTitle>Coming Soon</SidebarLinkTitle>
          </SidebarLink>
        
          <SidebarLink>
            <SidebarTag><TiIcons.TiSpannerOutline /></SidebarTag>
            <SidebarLinkTitle>Maintenance</SidebarLinkTitle>
          </SidebarLink>

      
          <SidebarLink>
            <SidebarTag><AiIcons.AiFillLock /></SidebarTag>
            <SidebarLinkTitle>Authentication</SidebarLinkTitle>
            {
              caretDown2 ?
              <AiIcons.AiFillCaretUp onClick={caretClick2} className="caret-pos"/> 
              :<AiIcons.AiFillCaretDown onClick={caretClick2} className="caret-pos"/>
            }
          </SidebarLink>
          {
            caretDown2 && 
            <SidebarDropdown>
              <SidebarLink>
                <SidebarTag className="icon">LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
              <SidebarLink>
                <SidebarTag>LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
            </SidebarDropdown>
          }

          <SidebarLink>
            <SidebarTag><MdIcons.MdOutlineErrorOutline /></SidebarTag>
            <SidebarLinkTitle>Error</SidebarLinkTitle>
            {
            caretDown3 ? 
              <AiIcons.AiFillCaretUp onClick={caretClick3} className="caret-pos"/> : 
              <AiIcons.AiFillCaretDown onClick={caretClick3} className="caret-pos"/>
            }
          </SidebarLink>
          {
            caretDown3 && 
            <SidebarDropdown>
              <SidebarLink>
                <SidebarTag className="icon">LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
              <SidebarLink>
                <SidebarTag>LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
            </SidebarDropdown>
          }
        

        
          <SidebarTitle>UI Components</SidebarTitle>
          <SidebarLink>
            <SidebarTag><BiIcons.BiBarChartSquare/></SidebarTag>
            <SidebarLinkTitle>Charts</SidebarLinkTitle>
            {
              caretDown4 ? 
              <AiIcons.AiFillCaretUp onClick={caretClick4} className="caret-pos"/> : 
              <AiIcons.AiFillCaretDown onClick={caretClick4} className="caret-pos"/>
            }
          </SidebarLink>
          {
            caretDown4 && 
            <SidebarDropdown>
              <SidebarLink>
                <SidebarTag>LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
              <SidebarLink>
                <SidebarTag>LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
            </SidebarDropdown>
          }

          <SidebarLink>
            <SidebarTag><RiIcons.RiDashboardFill /></SidebarTag>
            <SidebarLinkTitle>Widgets</SidebarLinkTitle>
            {
              caretDown5 ? 
              <AiIcons.AiFillCaretUp onClick={caretClick5} className="caret-pos"/> : 
              <AiIcons.AiFillCaretDown onClick={caretClick5} className="caret-pos"/>
            }
          </SidebarLink>
          {
            caretDown5 && 
            <SidebarDropdown>
              <SidebarLink>
                <SidebarTag className="icon">LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
              <SidebarLink>
                <SidebarTag>LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
            </SidebarDropdown>
          }
          <SidebarLink>
            <SidebarTag><RiIcons.RiDashboardFill /></SidebarTag>
            <SidebarLinkTitle>Vuetify</SidebarLinkTitle>
            {caretDown6 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick6}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick6}/>}
          </SidebarLink>
          {
            caretDown6 && 
            <SidebarDropdown>
              <SidebarLink>
                <SidebarTag className="icon">LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
              <SidebarLink>
                <SidebarTag>LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
            </SidebarDropdown>
          }
        

        
          <SidebarTitle>Directives</SidebarTitle>
          <SidebarLink>
            <SidebarTag><em>F</em></SidebarTag>
            <SidebarLinkTitle>Directives</SidebarLinkTitle>
          {caretDown7 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick7}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick7}/>}
          </SidebarLink>
          {
            caretDown3 && 
            <SidebarDropdown>
              <SidebarLink>
                <SidebarTag className="icon">LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
              <SidebarLink>
                <SidebarTag>LO</SidebarTag>
                <SidebarLinkTitle>Login</SidebarLinkTitle>
              </SidebarLink>
            </SidebarDropdown>
          }
        
         

        
      </SidebarItems>

    </SidebarContainer>
    </>
  )
    
}

export default Sidebar;