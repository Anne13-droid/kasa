import React from "react";
import { useState } from "react";
import ChevronG from "../../assets/chevronG.png";
import ChevronD from "../../assets/chevronD.png";
import "./carousel.css";

function Carousel({ pictures }) {
    // const [pictures, setPictures] = useState(props.pictures);
    // const totalPictures = pictures.lenght;

    const [currentPictureIndex, setCurrentPictureIndex] = useState(pictures);

    const previousSlide = () => {
        const lastIndex = pictures.length - 1;
        const shouldResetIndex = currentPictureIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentPictureIndex;

        setCurrentPictureIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = pictures.length - 1;
        const shouldResetIndex = currentPictureIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentPictureIndex;

        setCurrentPictureIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-image-container">
                {pictures.map((pictures, index) => (
                    <img
                        key={index}
                        src={pictures}
                        alt={`Carousel slide ${index}`}
                        className={`carousel__image ${
                            currentPictureIndex === index ? "active" : ""
                        }`}
                        id="slide"
                    />
                ))}
            </div>
            <button onClick={previousSlide} className="chevron" id="g">
                <img
                    src={ChevronG}
                    alt="flêche gauche"
                    className="kas-flêche"
                />
            </button>
            <button onClick={nextSlide} className="chevron" id="d">
                <img
                    src={ChevronD}
                    alt="flêche droite"
                    className="kas-flêche"
                />
            </button>
        </div>
        // <div className="carousel">
        //     <div className="container-chevron">
        //         {slide - 1 < 0 ? setSlide(pictures.length - 1) : null}
        //         {/* {slide + 1 >= 0 ? setSlide(0) : slide + 1} */}
        //         <button className="chevron" id="g">
        //             <img
        //                 src={ChevronG}
        //                 alt="flêche gauche"
        //                 className="kas-flêche-g"
        //                 onClick={pictures.length - 1}
        //             />
        //         </button>
        //         <button className="chevron" id="d">
        //             <img
        //                 src={ChevronD}
        //                 alt="flêche droite"
        //                 className="kas-flêche-d"
        //                 onClick={pictures.length + 1}
        //             />
        //         </button>
        //     </div>
        //     <img
        //         src={pictures[slide]}
        //         alt="photos de l'appartement"
        //         className="kas-phot-logement"
        //     />
        // </div>
    );
}

export default Carousel;
