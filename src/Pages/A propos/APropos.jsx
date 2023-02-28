import React from "react";
import image from "../../assets/imgabout.png";
import About from "../../Components/About/About";
import "../A propos/APropos.css";

export default function Apropos() {
    return (
        <div className="kas-img-background">
            <div>
                <img src={image} alt="paysage" className="kas-img-banner" />
            </div>
            <About />
        </div>
    );
}
