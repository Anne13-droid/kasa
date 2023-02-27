import React from "react";
import "./card.css";

export default function card(props) {
    const { cover, title } = props;
    return (
        <div className="ks-card">
            <div className="kas-thumb">
                <img src={cover} alt="" className="kas-img" />
                <h2 className="kas-title">{title}</h2>
            </div>
        </div>
    );
}
