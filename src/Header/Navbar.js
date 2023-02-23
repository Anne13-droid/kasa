import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <header className="kas-header">
            <img src={logo} alt="logo-kasa" className="kas-logo" />
            <nav className="kas-navbar">
                <Link to="/" className="kas-navbar-link">
                    Accueil
                </Link>
                <Link to="/a_propos" className="kas-navbar-link2">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}
