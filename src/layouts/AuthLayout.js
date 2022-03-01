import React from "react";
import Card from "../components/Card";
import Navbar from '../components/Navbar'


const AuthLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Card />
            <div>{children}</div>
         
        </div>

    )
}

export default AuthLayout