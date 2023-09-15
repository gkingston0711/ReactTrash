import React from "react";


export default function Card(props){
    return(
        <div className="card-container">
            <img src={props.img} alt ="card_image" />
            <div className="card-body">
                <h3 className="title">{props.title}</h3>
                <a href={props.doclink} className="doc-link">Documentation</a>
                <p className="creation-date">Creation Date: {props.date}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}