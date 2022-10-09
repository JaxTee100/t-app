import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DataBox from "./DataBox";
import Members from "./members--tag";
import Task from "./tasks";
import * as MdIcons from "react-icons/md"
import * as TbIcons from "react-icons/tb"
import * as RiIcons from "react-icons/ri"
import * as BiIcons from "react-icons/bi"
import * as BsIcons from "react-icons/bs"
import ItemDet from "./ItemDet";
import Bar from "./Bar";
import LineC from "./Line";


const Store = () => {
    return(
        <div className="container">
      <Sidebar />

      <div className="nav-data">
        <Navbar />
        <div className="data-boxes">
          <DataBox 
            name="Sales" 
            value="105K" 
            upicon={<RiIcons.RiArrowUpLine />} 
            rise="4.25%"
            icon={<MdIcons.MdStorefront />}
            color={{
              color: "#237ec6"
            }}
          />
          
          <DataBox 
            name="New User" 
            value="3214" 
            upicon={<RiIcons.RiArrowUpLine />} 
            rise="2.25%"
            icon={<MdIcons.MdPeople />}
            color={{
                color: "#fe8f01"
              }}
          />
          
          <DataBox 
            name="Traffic" 
            value="350K" 
            upicon={<RiIcons.RiArrowUpLine />} 
            rise="4.75%"
            icon={<RiIcons.RiArrowUpDownLine />}
            color={{
                color: "red"
              }}
          />

          <DataBox 
            name="Performance" 
            value="105K" 
            upicon={<RiIcons.RiArrowUpLine />} 
            rise="4.75%"
            icon={<BiIcons.BiBarChartSquare />}
            color={{
                color: "#14bad2"
              }}
          />
          
        </div>
        <div className="graphs">
            <div className="line--graph">
                <LineC />
            </div>

            <div className="bar--chart">
                <Bar />
            </div>
        </div>
        <div className="item--info">
            <div className="item--tiles">
                    <div className="top">
                        <h3>Latest Media</h3>
                        <MdIcons.MdMoreVert  className="icon"/>
                    </div>
                    <div className="items--list">
                        <ItemDet
                            img="images/snikers.jpg"
                            name="Mary Beveridge"
                            date="Sep 11, 2022"
                            tag="Published"
                            color={{
                                backgroundColor: "#21e9b6"
                            }}
                        
                        />
                            <ItemDet
                            img="images/apple.jpeg"
                            name="Mary Beveridge"
                            date="Sep 11, 2022"
                            tag="Published"
                            color={{
                                backgroundColor: "#21e9b6"
                            }}
                        
                        />
                            <ItemDet
                            img="images/berry.jpeg"
                            name="Mary Beveridge"
                            date="Sep 11, 2022"
                            tag="Progress"
                            color={{
                                backgroundColor: "#ffc401"
                            }}
                        
                        />
                        <ItemDet
                            img="images/cup.jpg"
                            name="Mary Beveridge"
                            date="Sep 11, 2022"
                            tag="Rejected"
                            color={{
                                backgroundColor: "#f44336"
                            }}
                        
                        />
                        <ItemDet
                            img="images/cup.jpg"
                            name="Mary Beveridge"
                            date="Sep 11, 2022"
                            tag="Published"
                            color={{
                                backgroundColor: "#21e9b6"
                            }}
                        
                        />
                        <ItemDet
                            img="images/shoe.jpeg"
                            name="Mary Beveridge"
                            date="Sep 11, 2022"
                            tag="Published"
                            color={{
                                backgroundColor: "#21e9b6"
                            }}
                        
                        />
                    </div>

                
            </div>
            <div className="pack">
                <div className="item--recipe">
                    <div className="img--info">
                        <img src="images/asian.jpeg" alt="img" />
                        <h4>Beau Liversidge</h4>
                        <MdIcons.MdMoreVert  className="icon"/>
                    </div>
                    <div className="img"><img src="images/asian.jpeg" alt="img" /></div>
                    <div className="recipe--details">
                        <h2>Salad Recipes</h2>
                        <p>Sep 11, 2022</p>

                        <p>Turns out semicolon-less 
                            style is easier and safer in 
                            TS because most gotcha edge 
                            cases are type invalid as well. 
                        </p>
                        <div>
                            <BsIcons.BsHeartFill /><span>213 Likes</span>
                            <BsIcons.BsFillChatLeftTextFill /><span>123 Comments</span>

                        
                        </div>
                    </div>
                </div>
                <div className="pack2">
                    <div className="info--desk1">
                        <h3>Task Status</h3>
                        <p>On Going</p>
                        <div className="value--bars">
                            <p>Sketch File</p>
                            <div className="value--bar">
                                <div className="value--bar1"></div>
                                <div className="value--bar2"></div>
                            </div>
                            <p>Sketch File</p>
                            <div className="value--bar">
                                <div className="value--bar1"></div>
                                <div className="value--bar2"></div>
                            </div>
                            <p>Sketch File</p>
                            <div className="value--bar">
                                <div className="value--bar1"></div>
                                <div className="value--bar2"></div>
                            </div>
                        </div>
                        <div className="value--bars">
                            <p>Sketch File</p>
                            <div className="value--bar">
                                <div className="value--bar1"></div>
                                <div className="value--bar2"></div>
                            </div>
                            <p>Sketch File</p>
                            <div className="value--bar">
                                <div className="value--bar1"></div>
                                <div className="value--bar2"></div>
                            </div>
                            <p>Sketch File</p>
                            <div className="value--bar">
                                <div className="value--bar1"></div>
                                <div className="value--bar2"></div>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
            <div className="item--tickets">
                <div className="tasks">
                    <div className="label--tag">
                        <h3>Tickets</h3>
                        <div id="active---tasks">3 ACTIVE TASKS</div>
                        <div id="completed--tasks">2 COMPLETED TASKS</div>
                    </div>
                    <div id="input--field">
                        <input type="text" placeholder="Add New"/>
                    </div>
                    
                    <Task
                        task="[PRE-111] Logo Making"
                        color={{backgroundColor: "#f06292" }}
                    />
                     <Task
                        task="[PRE-111] Logo Making"
                        color={{backgroundColor: "#f06292" }}
                    />
                     <Task
                        task="[PRE-111] Logo Making"
                        color={{backgroundColor: "#f06292" }}
                    />
                </div>


                <div className="members">
                    <h3 className="member--text">Members</h3>
                    <div className="member--search">
                        <input type="search" placeholder="Search"/>
                    </div>
                    <div className="members--list">
                        <Members 
                            img="images/asian.jpeg" 
                            name="Hon Tambawa"
                            position="Toiletries"
                        />
                        <Members 
                            img="images/asian.jpeg" 
                            name="Hon Tambawa"
                            position="Toiletries"
                        />
                        <Members 
                            img="images/asian.jpeg" 
                            name="Hon Tambawa"
                            position="Toiletries"
                        />
                        <Members 
                            img="images/asian.jpeg" 
                            name="Hon Tambawa"
                            position="Toiletries"
                        />
                    </div>
                </div>
            </div>
        </div>
        
      </div>
      
    </div>
    )
}


export default Store;