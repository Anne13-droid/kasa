import React from "react";
import "./card.css";

export default function card(props) {
    const { cover, title } = props;
    return (
        <div className="ks-card">
            <img src={cover} alt="" className="" />
            <h2>{title}</h2>
        </div>
    );
}
