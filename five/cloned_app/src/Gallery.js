import { Carousel } from 'react-carousel-minimal';
import image1 from "../src/images/noah-grossenbacher-6K7s8Q3zgKQ-unsplash.jpg";
import image2 from "../src/images/steven-lu-CIyDU5WLxxw-unsplash.jpg";
import image3 from "../src/images/harli-marten-RPJxn89AhUo-unsplash.jpg";
import image4 from "../src/images/danist-soh-C_-DQF-x-N0-unsplash.jpg";
import image5 from "../src/images/farhan-khan-QeU6A1f8zrA-unsplash.jpg";
import image6 from "../src/images/omid-h-psKJ6wSei8k-unsplash.jpg";
import image7 from "../src/images/hannah-troupe-0FQneB1VjaM-unsplash.jpg";
import image8 from "../src/images/dominik-lange-Lej_oqHljbk-unsplash.jpg";


export default function Gallery(){
    const data = [
        {
            image: image1
        },
        {
            image: image2
        },
        {
            image: image3
        },
        {
            image: image4
        },
        {
            image: image5
        },
        {
            image: image6
        },
        {
            image: image7
        },
        {
            image: image8
        }
    ];

    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="gallery-main">
                <div className="carousel-container" style={{padding: "0 20px"}}>
                    <Carousel className ="main-carousel"
                         data={data}
                         time={4000}
                         width="850px"
                         height="500px"
                         radius="10px"
                         slideNumber={true}
                         slideNumberStyle={slideNumberStyle}
                         captionPosition="bottom"
                         automatic={true}
                         dots={true}
                         pauseIconColor="white"
                         pauseIconSize="40px"
                         slideBackgroundColor="darkgrey"
                         slideImageFit="cover"
                         thumbnails={true}
                         thumbnailWidth="100px"
                         style={{
                             textAlign: "center",
                             maxWidth: "850px",
                             maxHeight: "500px",
                             margin: "40px auto",
                         }}
                    />
                </div>
        </div>
    )
}
