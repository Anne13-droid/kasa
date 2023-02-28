import React from "react";
import { useState } from "react";
import VectorOp from "../../assets/Vectoropen.png";
import VectorClo from "../../assets/Vector.png";
import About from "../About/About";

export default function Collapse() {
    const [isOpen, setIsOpen] = useState(true);
    return isOpen ? (
        <div className="kas-ouvert">
            <button className="kas-VectorOp" onClick={() => setIsOpen(true)}>
                <img src={VectorOp} alt="ouvert" className="kas-ouvert" />
            </button>
            <About.p />
        </div>
    ) : (
        <div className="kas-fermé">
            <button className="kas-VectorClo" onClick={() => setIsOpen(false)}>
                <img src={VectorClo} alt="ouvert" className="kas-ouvert" />
            </button>
        </div>
    );
}
