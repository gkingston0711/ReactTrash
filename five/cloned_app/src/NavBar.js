import React from 'react';
import myimage from "./image.png";




export default function NavBar(){
    return (
        <nav className="flex-container">
            <img src={myimage} className="NavBar-img" />
        </nav>
    )
}