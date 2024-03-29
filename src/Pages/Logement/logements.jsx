import React from "react";
import { useParams } from "react-router-dom";
import data from "../../datas/logementsList.json";
import Collapse from "../../Components/Collapse/Collapse";
import SlideShow from "../../Components/Pictures/SlideShow";
import NotFound from "../NotFound/NotFound";
import Rating from "../../Components/Rating/Rating";
import "./logement.css";
import Tags from "../../Components/Tags/Tags";

export default function Logement() {
  const { logementId } = useParams();

  const appart = data.find((appart) => appart.id === logementId);

  if (!appart) {
    return <NotFound />;
  }

  const {
    pictures,
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
  } = appart || {};

  return (
    <>
      <div className="kas-logement">
        <SlideShow pictures={pictures} />

        <div className="description">
          <div className="kas-location">
            <h1>{title}</h1>
            <p>{location} </p>
            <ul>
              <Tags tags={tags} />
            </ul>
          </div>
          <div className="kas-host-rating">
            <div className="kas-host">
              {host.name}
              <img src={host.picture} alt={host} className="kas-avatar" />
            </div>
            <div className="kas-rating">
              <Rating rate={rating} />
            </div>
          </div>
        </div>
        <div className="kas-h2-container">
          <div className="kas-title2">
            <h2 className="kas-h2">Description </h2>
            <Collapse span={description} className="kas-description" />
          </div>
          <div className="kas-title2">
            <h2 className="kas-h2">Equipements</h2>
            <Collapse span={equipments} className="kas-equipement" />
          </div>
        </div>
      </div>
    </>
  );
}
