import React from "react";
import BarChart from "./BarChart";
import {UserData} from "../Data"



const Bar = () => {

    const [userData, setUserData] = React.useState(
        {
          labels: UserData.map((data) => data.month),
          datasets: [{
            label: "Visits",
            data: UserData.map((data) => data.visits),
            backgroundColor: ["#e893f6"]
    
          },
          {
            label: "Order",
            data: UserData.map((data) => data.order),
            backgroundColor: ["#7aa6fc"]
    
          }]
        }
      )



    return(
        <div className="Bar-chart">
      
            <BarChart chartData={userData} />
      
        </div>
    )
}

export default Bar;