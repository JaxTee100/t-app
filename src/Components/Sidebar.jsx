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
    <div className="sidebar-container">

      <div className="logo--title">
        <img src="./images/vlogo2.png" alt="img" />
        <h2>Vuse Admin</h2>
      </div>

      <div className="sidebar--items">
        <div className="hor1">
          <RiIcons.RiDashboardFill className="icon light-blue"/>
          <h3 className="light-blue">Dashboard</h3>
          {caretDown1 ? <AiIcons.AiFillCaretUp className="caret-pos light-blue" onClick={caretClick1}/>:<AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick1}/>}
        </div>

        {caretDown1 && <div className="hor1 cir">
          <h1 className="icon light-blue">OP</h1>
          <h3 className="light-blue">Operational</h3>

        </div>}

        <div className="hor1">
          <h1 className="icon">AN</h1>
          <h3>Analytical</h3>

        </div>

        <div>
          <p>App</p>
          <div className="hor1">
            <MdIcons.MdContacts  className="icon"/>
            <h3>Contacts</h3>
          </div>
          <div className="hor1">
            <AiIcons.AiOutlineMessage className="icon"/>
            <h3>Chat</h3>
          </div>
        </div>

        <div>
          <p>Style & User Interface</p>
          <div className="hor1">
            <MdIcons.MdOutlineColorLens className="icon"/>
            <h3>Color</h3>
          </div>
          <div className="hor1">
            <AiIcons.AiOutlinePicture className="icon"/>
            <h3>Icons</h3>
          </div>
          <div className="hor1">
            <AiIcons.AiOutlineQuestionCircle className="icon"/>
            <h3>Helpers</h3>
          </div>
          <div className="hor1">
            <AiIcons.AiOutlineBorderHorizontal className="icon"/>
            <h3>Border Radius</h3>
            <div className="caret-pos corner-radius">new</div>
          </div>
          <div className="hor1">
            <h1 className="icon">TT</h1>
            <h3>Text & Typography</h3>
            <div className="caret-pos corner-radius">new</div>
          </div>
          <div className="hor1">
            <AiIcons.AiOutlinePlaySquare className="icon"/>
            <h3>Motion</h3>
          </div>
          <div className="hor1">
            <h1 className="icon">PR</h1>
            <h3>Programmatic Scrolling</h3>
          </div>
          <div className="hor1">
            <AiIcons.AiOutlineForm className="icon"/>
            <h3>Forms</h3>
          </div>
        </div>

        <div>
          <p className="low-cap">Pages</p>
          <div className="hor1">
            <MdIcons.MdPeopleOutline className="icon"/>
            <h3>Profile</h3>
          </div>
          <div className="hor1">
            <MdIcons.MdOutlineTimer className="icon"/>
            <h3>Coming Soon</h3>
          </div>
          <div className="hor1">
            <TiIcons.TiSpannerOutline className="icon"/>
            <h3>Maintenance</h3>
          </div>
          <div className="hor1">
            <AiIcons.AiFillLock className="icon"/>
            <h3>Authentication</h3>
            {caretDown2 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick2}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick2}/>}
          </div>
          {caretDown2 && <div><div className="hor1">
            <h1 className="icon">LO</h1>
            <h3>Login</h3>
          </div>
          <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div></div>
          }

          <div className="hor1">
            <MdIcons.MdOutlineErrorOutline className="icon"/>
            <h3>Error</h3>
            {caretDown3 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick3}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick3}/>}
          </div>
          {caretDown3 && <div><div className="hor1">
            <h1 className="icon">LO</h1>
            <h3>Login</h3>
          </div>
          <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div></div>
          }
        </div>

        <div>
          <p className="low-cap">UI Components</p>
          <div className="hor1">
            <BiIcons.BiBarChartSquare className="icon"/>
            <h3>Charts</h3>
            {caretDown4 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick4}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick4}/>}
          </div>
          {caretDown4 && <div><div className="hor1">
            <h1 className="icon">LO</h1>
            <h3>Login</h3>
          </div>
          <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div></div>
          }
          <div className="hor1">
            <RiIcons.RiDashboardFill className="icon"/>
            <h3>Widgets</h3>
            {caretDown5 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick5}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick5}/>}
          </div>
          {caretDown5 && <div><div className="hor1">
            <h1 className="icon">LO</h1>
            <h3>Login</h3>
          </div>
          <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div></div>
          }
          <div className="hor1">
            <RiIcons.RiDashboardFill className="icon"/>
            <h3>Vuetify</h3>
            {caretDown6 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick6}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick6}/>}
          </div>
          {caretDown6 && <div><div className="hor1">
            <h1 className="icon">LO</h1>
            <h3>Login</h3>
          </div>
          <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div></div>
          }
        </div>

        <div>
          <p className="low-cap">Directives</p>
          <div className="hor1"> <h1 className="icon"><em>F</em></h1>
          <h3>Directives</h3>
          {caretDown7 ? <AiIcons.AiFillCaretUp className="caret-pos" onClick={caretClick7}/> : <AiIcons.AiFillCaretDown className="caret-pos" onClick={caretClick7}/>}
          </div>
          {caretDown7 && <div><div className="hor1">
            <h1 className="icon">LO</h1>
            <h3>Login</h3>
          </div>
          <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div>
        <div className="hor1">
          <h1 className="icon">LO</h1>
          <h3>Login</h3>
        </div></div>
          }
        </div>

        <div>
          <p className="low-cap">Guide</p>
          <div className="hor1">
          <TiIcons.TiDocument className="icon"/>
          <h3>Documentation</h3>
          </div>
         

        </div>
      </div>

    </div>
  )
    
}

export default Sidebar;