import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="kas-page-error">
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

export default NotFound;
