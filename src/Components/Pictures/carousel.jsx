import React from "react";

function carousel({ pictures }) {
    return (
        <div>
            <img
                src={pictures[0]}
                alt="photos des l'appartement"
                className="kas-phot-logement"
            />
        </div>
    );
}

export default carousel;
