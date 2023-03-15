import Etoile from "../../assets/etoile.png";
import EtoileRouge from "../../assets/etoile-rouge.png";

function Rating(rate) {
    const rang = [1, 2, 3, 4, 5];

    return (
        <div>
            {rang.map((key, rangelement) =>
                rangelement <= rate.rate ? (
                    <img
                        src={EtoileRouge}
                        alt="nombre d'étoiles"
                        className="kas-etoile-rouge"
                        key={key}
                    />
                ) : (
                    <img
                        src={Etoile}
                        alt="nombre d'étoiles"
                        className="kas-etoile"
                        key={key}
                    />
                )
            )}
        </div>
    );
}

export default Rating;
