import React from "react";
import "./home.css";
import Banner from "../../Components/Banner/banner";
import Cards from "../../Components/Gallery/Gallery";

export default function Body() {
    return (
        <div>
            <Banner />
            <Cards />
        </div>
    );
}
