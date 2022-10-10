import React from "react";
import * as AiIcons from "react-icons/ai"
import * as RiIcons from "react-icons/ri"
import * as MdIcons from "react-icons/md"
import * as TiIcons from "react-icons/ti"
import * as BiIcons from "react-icons/bi"



const Sidebar = () =>{


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
 setCaretDown4(prev =>!prev)
}
const [caretDown7, setCaretDown7] = React.useState(false)
const caretClick7 = () => {
 setCaretDown4(prev =>!prev)
}



  return(
    <>
    <SidebarLogo>
        <Logo src="./images/vlogo2.png" alt="img" />
        <LogoTitle>Vuse Admin</LogoTitle>
      </SidebarLogo>
    <SidebarContainer>

      

      <SidebarItems>
        <SidebarLink>
          <RiIcons.RiDashboardFill/>
          <SidebarLinkTitle className="light-blue">Dashboard</SidebarLinkTitle>
          {caretDown1 ? <AiIcons.AiFillCaretUp onClick={caretClick1}/>:<AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick1}/>}
        </SidebarLink>

        {caretDown1 && <SidebarLink>
          <SidebarTag>OP</SidebarTag>
          <SidebarLinkTitle>Operational</SidebarLinkTitle>

        </SidebarLink>}

      
        <SidebarLink>
          <SidebarTag >AN</SidebarTag>
          <SidebarLinkTitle>Analytical</SidebarLinkTitle>

        </SidebarLink>

        
          <SidebarTitle>App</SidebarTitle>
          <SidebarLink>
            <MdIcons.MdContacts />
            <SidebarLinkTitle>Analytical</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <AiIcons.AiOutlineMessage/>
            <SidebarLinkTitle>Chat</SidebarLinkTitle>
          </SidebarLink>
            
          
        

        <SidebarTitle>Style & User Interface</SidebarTitle>
        <SidebarLink>
          <MdIcons.MdOutlineColorLens/>
          <SidebarLinkTitle>Color</SidebarLinkTitle>
        </SidebarLink>
        
      
          <SidebarLink>
            <AiIcons.AiOutlinePicture/>
            <SidebarLinkTitle>Icons</SidebarLinkTitle>
          </SidebarLink>

          <SidebarLink>
            <AiIcons.AiOutlineQuestionCircle className="icon"/>
            <SidebarLinkTitle>Helpers</SidebarLinkTitle>
          </SidebarLink>

          <SidebarLink>
            <AiIcons.AiOutlineBorderHorizontal className="icon"/>
            <SidebarLinkTitle>Border Radius</SidebarLinkTitle>
            <Tag>new</Tag>
          </SidebarLink>

          <SidebarLink>
            <SidebarTag>TT</SidebarTag>
            <SidebarLinkTitle>Text & Typography</SidebarLinkTitle>
            <Tag>new</Tag>
          </SidebarLink>
          <SidebarLink>
            <AiIcons.AiOutlinePlaySquare className="icon"/>
            <SidebarLinkTitle>Motion</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <SidebarTag>PR</SidebarTag>
            <SidebarLinkTitle>Programmatic Scrolling</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <AiIcons.AiOutlineForm/>
            <SidebarLinkTitle>Forms</SidebarLinkTitle>
          </SidebarLink>
        

        
          <SidebarTitle>Pages</SidebarTitle>
          <SidebarLink>
          <MdIcons.MdPeopleOutline/>
            <SidebarLinkTitle>Profile</SidebarLinkTitle>
          </SidebarLink>
          <SidebarLink>
            <MdIcons.MdOutlineTimer className="icon"/>
            <SidebarLinkTitle>Coming Soon</SidebarLinkTitle>
          </SidebarLink>
        
          <SidebarLink>
            <TiIcons.TiSpannerOutline />
            <SidebarLinkTitle>Maintenance</SidebarLinkTitle>
          </SidebarLink>

      
          <SidebarLink>
            <AiIcons.AiFillLock />
            <SidebarLinkTitle>Authentication</SidebarLinkTitle>
            {
              caretDown2 ?
              <AiIcons.AiFillCaretUp onClick={caretClick2}/> 
              :<AiIcons.AiFillCaretDown onClick={caretClick2}/>
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
            <MdIcons.MdOutlineErrorOutline className="icon"/>
            <h3>Error</h3>
            {
            caretDown3 ? 
              <AiIcons.AiFillCaretUp onClick={caretClick3}/> : 
              <AiIcons.AiFillCaretDown onClick={caretClick3}/>
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
            <BiIcons.BiBarChartSquare/>
            <SidebarTag>Charts</SidebarTag>
            {
              caretDown4 ? 
              <AiIcons.AiFillCaretUp onClick={caretClick4}/> : 
              <AiIcons.AiFillCaretDown onClick={caretClick4}/>
            }
          </SidebarLink>
          {
            caretDown4 && 
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
            <RiIcons.RiDashboardFill />
            <SidebarLinkTitle>Widgets</SidebarLinkTitle>
            {
              caretDown5 ? 
              <AiIcons.AiFillCaretUp onClick={caretClick5}/> : 
              <AiIcons.AiFillCaretDown onClick={caretClick5}/>
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
            <RiIcons.RiDashboardFill />
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