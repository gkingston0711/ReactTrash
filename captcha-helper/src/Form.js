import React,{useState} from 'react';
import "./form.css"


export default function Form(){
    const [randomImage, setRandomImage] = useState(null)

    const generateRandomNumber = () => {
        const min = 1; // Minimum value (inclusive)
        const max = 1000; // Maximum value (exclusive)
        return(Math.floor(Math.random() * (max - min) + min));
    };

    function handleClick(){
        var myNum = generateRandomNumber()
        var myLink =`https://picsum.photos/id/${myNum}/5000/3333`
        console.log(myLink)
        setRandomImage(myLink)
    }

    return (
    <main>
        <div className="form">
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
            <button onClick={handleClick} className="form-button">
                Get a new image
            </button>
            <img src ={randomImage} className="captcha-image"/>
        </div>
    </main>
    )
}