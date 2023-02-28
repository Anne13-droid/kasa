import React from "react";
import image from "../../assets/img.png";

function banner() {
    return (
        <div className="kas-body">
            <div className="kas-img-background">
                <img src={image} alt="montagne" className="kas-img-banner" />
            </div>
            <h1 className="kas-titre">Chez vous , partout et ailleurs</h1>
        </div>
    );
}

export default banner;
