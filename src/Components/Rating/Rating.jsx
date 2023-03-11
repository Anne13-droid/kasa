// import React, { useState } from 'react'
import Etoile from "../../assets/etoile.png";

function Rating() {
    // const [etoile, setEtoile] = useState(0)

    return (
        <div>
            <img src={Etoile} alt="nombre d'étoiles" className="kas-etoile" />
        </div>
    );
}

export default Rating;
