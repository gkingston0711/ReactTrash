import React from "react";
import photo1 from "./images/Python.svg.png"

export default function Card(){
    return(
        <div className="card-container">
            <img src={photo1} alt ="card_image" />
            <div className="card-body">
                <h2>Language Type</h2>
                <p className="card-description">something here</p>
                <footer>footer here</footer>
            </div>
        </div>
    )
}