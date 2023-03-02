import React from "react";
import { useState } from "react";
import ChevronG from "../../assets/chevronG.png";
import ChevronD from "../../assets/chevronD.png";
import "./carousel.css";

function Carousel(props) {
    // const [pictures, setPictures] = useState(props.pictures);
    // const totalPictures = pictures.lenght;

    const [currentPictureIndex, setCurrentPictureIndex] = useState(
        props.pictures
    );

    const previousSlide = () => {
        const lastIndex = props.pictures.length - 1;
        const shouldResetIndex = currentPictureIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentPictureIndex;

        setCurrentPictureIndex(index);
    };

    const nextSlide = () => {
        const lastIndex = props.pictures.length - 1;
        const shouldResetIndex = currentPictureIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentPictureIndex;

        setCurrentPictureIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-image-container">
                {props.pictures.map((picture, index) => (
                    <img
                        key={index}
                        src={props.pictures}
                        alt={`Carousel slide ${index}`}
                        className={`carousel__image ${
                            currentPictureIndex === index ? "active" : ""
                        }`}
                    />
                ))}
            </div>
            <button onClick={previousSlide} className="chevron" id="g">
                <img
                    src={ChevronG}
                    alt="flêche gauche"
                    className="kas-flêche-g"
                />
            </button>
            <button onClick={nextSlide} className="chevron" id="d">
                <img
                    src={ChevronD}
                    alt="flêche droite"
                    className="kas-flêche-d"
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
