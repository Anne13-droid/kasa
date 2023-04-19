import React from "react";
import image from "../../assets/imgabout.png";
import Collapse from "../../Components/Collapse/Collapse";
import "./APropos.css";

export default function Apropos() {
  return (
    <div className="kas-apropos">
      <img src={image} alt="paysage" className="kas-img-banner2" />

      <div className="kas-container-ap">
        <div className="kas-titre2">
          <h2 className="kas-h2-ap">Fiablilité</h2>
          <Collapse
            span=" Les annonces postées sur Kasa garantissent une fiabilité
                        totale. Les photos sont conformes aux logements, et
                        toutes les informations sont régulièrement vérifiées par
                        nos équipes."
          />
        </div>

        <div className="kas-titre2">
          <h2 className="kas-h2-ap">Respect</h2>
          <Collapse
            span="La bienveillance fait partie des valeurs fondatrices de
                        Kasa. Tout comportement discriminatoire ou de
                        perturbation du voisinage entraînera une exclusion de
                        notre plateforme."
          />
        </div>

        <div className="kas-titre2">
          <h2 className="kas-h2-ap">Service</h2>
          <Collapse
            span=" Nos équipes se tiennent à votre disposition pour vous
                        fournir une expérience parfaite. N'hésitez pas à nous
                        contacter si vous avez la moindre question."
          />
        </div>
        <div className="kas-titre2">
          <h2 className="kas-h2-ap">Sécurité</h2>
          <Collapse
            span="La sécurité est la priorité de Kasa. Aussi bien pour nos
                        hôtes que pour les voyageurs, chaque logement correspond
                        aux critères de sécurité établis par nos services. En
                        laissant une note aussi bien à l'hôte qu'au locataire,
                        cela permet à nos équipes de vérifier que les standards
                        sont bien respectés. Nous organisons également des
                        ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </div>
  );
}
