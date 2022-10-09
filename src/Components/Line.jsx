import React from "react";
import {UserData} from "../Data"
import LineChart from "./LineChart";

const LineC = () => {
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
        <div className="Line-chart">
      
            <LineChart chartData={userData} />
      
        </div>
    )
}

export default LineC;