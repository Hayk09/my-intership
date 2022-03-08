import React from "react";
import "./index.scss"
import HomePagePhoto from "../Assets/HomePage.png"
import MenuButtonIcon from "../Assets/Group2.png"

const HomePage = () => {
    return(
        <div> 
            <img src={MenuButtonIcon} className="MenuButtonIcon"/>
            <a href="/"><p className="WooDoo"><b>WooDoo</b></p></a>
            <p className="WooDoo1"><b>WooDoo</b></p>
            <p className="DS">Design Studio</p>
            <p className="text1">Here you can order any type of</p>
            <p className="text2">furniture making your space beautiful.</p>
            <p className="text3">Simple but significant</p>
            <button className="button1"><b>EXPLORE</b></button>
            <a href="http://localhost:3000/signIn"><button className="button2"><b>Sign In</b></button></a>
            <button className="button3"><b>Sign Up</b></button>
            <img src={HomePagePhoto} className="HomePagePhoto" />
            
        </div>
    )
}

export default HomePage