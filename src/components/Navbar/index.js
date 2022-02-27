import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
      <p>HomePage</p>
      </Link>

      <Link to='/about'>
         <p>About</p> 
      </Link>
        
    </div>
  )
}

export default Navbar