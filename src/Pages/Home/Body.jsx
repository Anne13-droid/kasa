import React from "react";
import "./Body.css";
import image from "./images/img.png";
// import { Location } from "./Gallery/Location";

export default function Body() {
    return (
        <div className="kas-body">
            <img src={image} alt="montagne" className="kas-img" />
            <h1 className="kas-titre">Chez vous , partout et ailleurs</h1>
            {/* <ul className="kas-location">
                {Location.map(({ id, tittle, cover }) => (
                    <div key={id}></div>
                ))}
            </ul> */}
        </div>
    );
}
