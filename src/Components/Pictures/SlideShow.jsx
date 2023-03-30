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
        setIndexImage((indexImage - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="carousel">
            <div>
                <img
                    src={pictures[indexImage]}
                    alt="images du logment"
                    className="carousel-image-container"
                />
                <div className={pictures.length !== 1 ? "kas-numero" : "numero-invisble"}>
                    {indexImage + 1}/{pictures.length}
                   
                </div>
                <button onClick={incrementImage}>
                    <img
                        src={ChevronD}
                        alt="flêche droite"
                        className={(pictures.length !== 1) ? "kas-flêche1" : "flêche-invisible"}
                    />
                </button>
                <button onClick={decrementImage}>
                    <img
                        src={ChevronG}
                        alt="flêche gauche"
                        className={(pictures.length !== 1) ? "kas-flêche2" : "flêche-invisible"}
                    />
                </button>
            </div>
        </div>
    );
}

export default SlideShow;
