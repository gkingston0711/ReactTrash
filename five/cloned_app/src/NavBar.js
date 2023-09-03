import React from 'react';
import navImage from "./images/image.png";


export default function NavBar(){
    return (
        <nav className="flex-container">
            <img src={navImage} className="NavBar-img" />
        </nav>
    )
}