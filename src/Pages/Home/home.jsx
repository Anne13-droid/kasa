import React from "react";
import "./home.css";
import Banner from "../../Components/Banner/banner";
import Cards from "../../Components/Cards/cards";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Navbar";

export default function Body() {
    return (
        <div>
            <Header />
            <Banner />
            <Cards />
            <Footer />
        </div>
    );
}
