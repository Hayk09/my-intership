import React from "react";
import "./index.scss"
import photo1 from "../Assets/Rectangle 23.png"
import photo2 from "../Assets/Rectangle 24.png"
import photo3 from "../Assets/Rectangle 25.png"
import photo4 from "../Assets/Rectangle 26.png"


const Card = () => {
    return(
       <div className="divcrd">
           <p className="recomended"><b>Recomended for you</b></p>
            <img className="photo1" src={photo1}/>
            <img className="photo2" src={photo2}/>
            <img className="photo3" src={photo3}/>
            <img className="photo4" src={photo4}/>
       </div>
    )
}

export default Card