import React, {useState, useEffect} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";


const Home = () => {

    const [sidebar, setSidebar] = useState(true)

    const adjust= ()=>{
        setSidebar(prev => !prev);
    }

    const[button, setButton] = useState(true)
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize',showButton )

    return(
        <>
            <Sidebar sidebar={sidebar} />
            <Navbar sidebar={sidebar} adjust={adjust} button={button}/>
        </>
    )
}

export default Home;