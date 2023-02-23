import React from "react";
import "./Cards.css";
import { Location } from "./Gallery/Location";

export default function Cards({ location }) {
    return (
        <div className="kas-cards">
            <ul className="kas-location">
                {Location.map(({ id, tittle, cover }) => (
                    <div key={id}></div>
                ))}
            </ul>
        </div>
    );
}
