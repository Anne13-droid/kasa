import React from "react";
import image from "../../assets/img.png";
import "../../Pages/Home/home.css";

function Banner() {
  return (
    <div className="kas-img-background">
      <img src={image} alt="montagne" className="kas-img-banner" />

      <h1 className="kas-titre">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
