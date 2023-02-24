import React from "react";
import "./Footer.css";
import Logo from "../images/logo2.png";

export default function Footer() {
    return (
        <footer className="kas-footer">
            <img src={Logo} alt="kasa" className="kas-logo2" />
            <h1 className="kas-footer-text">
                © 2020 Kasa. All rights reserved
            </h1>
        </footer>
    );
}
