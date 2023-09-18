import React from 'react';
import "./form.css"


export default function Form(){
    return (
    <main>
        <form className="form">
            <input
                type="text"
                placeholder="Main topic"
                className="form-input"

            />
            <input
                type="text"
                placeholder="Sub topic"
                className="form-input"
            />
            <button className="form-button">
                Get a new image
            </button>

        </form>
    </main>
    )
}