import React from "react";
import "./Body.css";
import banner from "../assets/img.png";

export default function Body() {
    return (
        <div className="kas-body">
            <img
                src={banner}
                alt="imgage de présentation"
                className="kas-img"
            />
            <h1 className="kas-titre">Chez vous , partout et ailleurs</h1>
        </div>
    );
}
