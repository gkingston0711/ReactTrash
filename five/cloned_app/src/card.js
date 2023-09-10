import React from 'react';
import "./card.css"



export default function Card(props){
    return (
        <div className="card">
            <img src={props.img} alt ="birdblackdrop" />
            <div className="card-body">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
        </div>

    )
}