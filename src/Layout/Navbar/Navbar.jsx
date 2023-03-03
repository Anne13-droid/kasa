import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

export default function Navbar() {
    return (
        <header className="kas-header">
            <img src={logo} alt="logo-kasa" className="kas-logo" />
            <nav className="kas-navbar">
                <NavLink to="/" className={({isActive})=>(isActive ? "kas-navbar-link navbar-active" : "kas-navbar-link")} >
                    Accueil
                </NavLink>
                <NavLink to="/a_propos" className={({isActive})=>(isActive ? "kas-navbar-link2 navbar-active" : "kas-navbar-link2")}>
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}
