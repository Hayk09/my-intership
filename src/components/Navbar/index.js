import React from 'react'
import { Link } from 'react-router-dom'

// import MenuButtonIcon from "../Assets/Group 2.png"

const Navbar = ({data}) => {
 
  return (
    <div>
       {/* <img src={MenuButtonIcon} className="MenuButton"/> */}
       sdbhsbvhsd
        {
          data?.map((e)=> (
            <p>{e}</p>
          ))
        }
    </div>
  )
}

export default Navbar