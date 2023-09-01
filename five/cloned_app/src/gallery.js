import React from 'react';
import image1 from "../src/images/andrea-cau-nV7GJmSq3zc-unsplash.jpg";
import image2 from "../src/images/redd-f-Dl_Ya8eNRpk-unsplash.jpg"
import image3 from "../src/images/ben-o-bro-wpU4veNGnHg-unsplash.jpg"
import image4 from "../src/images/pedro-lastra-Nyvq2juw4_o-unsplash.jpg"

export default function Gallery(){
    return (
        <div className="imageGalleryMain">
            <div className="imageGallery">
                <img src={image1} className="gallery-img" alt="image1" />
                <img src={image3} className="gallery-img " alt="image2" />
                <img src={image3} className="gallery-img" alt="image3"/>
                <img src={image1} className="gallery-img" alt="image4"/>
                <img src={image1} className="gallery-img " alt="image1" />
                <img src={image3} className="gallery-img" alt="image2" />
                <img src={image3} className="gallery-img " alt="image3"/>
             </div>
            <div className="imageGallery">
                <img src={image1} className="gallery-img" alt="image1" />
                <img src={image3} className="gallery-img " alt="image2" />
                <img src={image3} className="gallery-img" alt="image3"/>
                <img src={image1} className="gallery-img" alt="image4"/>
                <img src={image1} className="gallery-img " alt="image1" />
                <img src={image3} className="gallery-img" alt="image2" />
                <img src={image3} className="gallery-img " alt="image3"/>
            </div>
            <div className="imageGallery">
                <img src={image1} className="gallery-img" alt="image1" />
                <img src={image3} className="gallery-img " alt="image2" />
                <img src={image3} className="gallery-img" alt="image3"/>
                <img src={image1} className="gallery-img" alt="image4"/>
                <img src={image1} className="gallery-img " alt="image1" />
                <img src={image3} className="gallery-img" alt="image2" />
                <img src={image3} className="gallery-img " alt="image3"/>
            </div>
            <div className="imageGallery">
                <img src={image1} className="gallery-img" alt="image1" />
                <img src={image3} className="gallery-img " alt="image2" />
                <img src={image3} className="gallery-img" alt="image3"/>
                <img src={image1} className="gallery-img" alt="image4"/>
                <img src={image1} className="gallery-img " alt="image1" />
                <img src={image3} className="gallery-img" alt="image2" />
                <img src={image3} className="gallery-img " alt="image3"/>
            </div>
            <div className="imageGallery">
                <img src={image1} className="gallery-img" alt="image1" />
                <img src={image3} className="gallery-img " alt="image2" />
                <img src={image3} className="gallery-img" alt="image3"/>
                <img src={image1} className="gallery-img" alt="image4"/>
                <img src={image1} className="gallery-img " alt="image1" />
                <img src={image3} className="gallery-img" alt="image2" />
                <img src={image3} className="gallery-img " alt="image3"/>
            </div>
        </div>
    )
}