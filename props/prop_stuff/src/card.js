import React from 'react';
import "./card.css"
import Photo from "./images/dominik-lange-Lej_oqHljbk-unsplash.jpg"


export default function Card(){

    return (
        <div className="card">
            <img src={Photo} alt ="birdblackdrop" />
            <div className="card-body">
                <h2>title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <h5>stuff</h5>
            </div>
        </div>

    )
}