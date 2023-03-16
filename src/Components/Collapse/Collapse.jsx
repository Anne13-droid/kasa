import React from "react";
import { useState } from "react";
import VectorOp from "../../assets/Vectoropen.png";
import VectorClo from "../../assets/Vector.png";
import "../../Pages/A propos/APropos.css";

export default function Collapse({ span }) {
    // je déclare une variable d'état que j'appelle isOpen dont l'état est false
    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className="kas-ouvert">
            <button className="kas-button kas-app"  onClick={() => setIsOpen(false)}>
                <img src={VectorClo} alt="ouvert" className="kas-open" />
            </button>
            {isOpen && (
                <div className="paragraphe">
                    <p className="kas-paragraphe">{span}</p>
                </div>
            )}
        </div>
    ) : (
        <div className="kas-fermé">
            <button className="kas-button kas-app" onClick={() => setIsOpen(true)}>
                <img src={VectorOp} alt="fermé" className="kas-close" />
            </button>
        </div>
    );
}
