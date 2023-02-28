import React from "react";

function carousel(props) {
    const { pictures } = props;
    return (
        <div>
            <img
                src={pictures}
                alt="photos des l'appartement"
                className="kas-phot-logement"
            />
        </div>
    );
}

export default carousel;
