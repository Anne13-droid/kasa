import { useState } from "react";
import ChevronG from "../../assets/chevrong.png";
import ChevronD from "../../assets/chevrond.png";

function carousel({ pictures }) {
    const [slide, setSlide] = useState(false);
    return (
        <div className="carousel">
            <img
                src={pictures[0]}
                alt="photos de l'appartement"
                className="kas-phot-logement"
            />
            <button>
                <img
                    src={ChevronG}
                    alt="flêche gauche"
                    className="kas-flêche-g"
                />
            </button>
            <button>
                <img
                    src={ChevronD}
                    alt="flêche droite"
                    className="kas-flêche-d"
                />
            </button>
        </div>
    );
}

export default carousel;
