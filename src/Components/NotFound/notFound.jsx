import React from "react";
import NavBar from "../../Layout/Header/Navbar";
import { Link } from "react-router-dom";

function notFound() {
    return (
        <div className="kas-page-error">
            <NavBar />
            <h1 className="kas-error">404</h1>
            <p className="kas-text-error">
                Oups! La page que vous demandez n'existe pas
            </p>
            <Link to="/" className="kas-return">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default notFound;
