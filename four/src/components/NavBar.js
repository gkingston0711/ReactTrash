import React from 'react';
import image from "./image.png";


export default function NavBar(){
    return (
        <nav className="flex-container">
            <img src={image} className="flex-img" />
            <ul className="flex-items">
                <li className="flex-item">Differences</li>
                <li className="flex-item">Similarities</li>
                <li className="flex-item">Pricing</li>
            </ul>
        </nav>
    )
}