import React, { useState } from "react";
import "./slideshow.css";
import ChevronG from "../../assets/chevronG.png";
import ChevronD from "../../assets/chevronD.png";

function SlideShow({ pictures }) {
    const [indexImage, setIndexImage] = useState(0);

    const incrementImage = () => {
        setIndexImage((indexImage + 1) % pictures.length);
    };
    const decrementImage = () => {
        setIndexImage((indexImage - 1) % pictures.length);
    };

    return (
        <div className="carousel">
            <div>
                <img
                    src={pictures[indexImage]}
                    alt="pics{indexImage + 1}"
                    className="carousel-image-container"
                />
                <div>{indexImage +1}/{pictures.length} </div>

                <button onClick={incrementImage} id="d">
                    <img
                        src={ChevronD}
                        alt="flêche droite"
                        className="kas-flêche"
                    />
                </button>
                <button onClick={decrementImage} id="g">
                    <img
                        src={ChevronG}
                        alt="flêche gauche"
                        className="kas-flêche"
                    />
                </button>
            </div>
        </div>
    );
}

export default SlideShow;
