import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ id, cover, title }) {
  return (
    <Link to={"logements/" + id} className="kas-thumb">
      <img src={cover} alt={title} className="kas-img" />
      <h2 className="kas-title">{title}</h2>
    </Link>
  );
}
