import React from 'react';
import navImage from "./images/programming-languages.png";


export default function NavBar(){
    return (
        <nav className="nav-container">
            <img src={navImage} className="NavBar-img" />
        </nav>
    )
}