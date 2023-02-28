import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function card({ id, cover, title }) {
    console.log(id, title, cover);

    return (
        <Link to={"logements/" + id} className="kas-thumb">
            <img src={cover} alt="" className="kas-img" />
            <h2 className="kas-title">{title}</h2>
        </Link>
    );
}
