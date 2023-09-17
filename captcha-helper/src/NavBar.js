import React from 'react';
import "./NavBar.css"
import navImage from "./images/3039437.png";


export default function NavBar(){
    return (
        <nav className="nav-container">
            <img src={navImage} className="NavBar-img" />
            <h2 className="NavBar-text">Captcha builder</h2>
        </nav>
    )
}