import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "./assets/logo"

export default function Navbar() {
    return (
        <header className="lmj-header">
            {/* <img src={Logo} alt="kasa" className="lmj-logo"/> */}
            <nav className="lmj-navbar">
                <Link to="/" className="lmj-navbar-link">
                    Accueil
                </Link>
                <Link to="/a_propos" className="lmj-navbar-link2">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}
