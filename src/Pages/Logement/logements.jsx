import React from "react";
import { useParams } from "react-router-dom";
import data from "../../datas/logementsList.json";
import Collapse from "../../Components/Collapse/Collapse";
import SlideShow from "../../Components/Pictures/SlideShow";
import NotFound from "../../Pages/NotFound/notFound";
import Rating from "../../Components/Rating/Rating";
import "./logement.css"

export default function Logement() {
    const { logementId } = useParams();

    const appart = data.find((appart) => appart.id === logementId);
   
    if(!appart){
        return <NotFound/>
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
        <div className="kas-logement">
            <SlideShow pictures={pictures} />
            <div className="description">
                <h1>{title}</h1>
                <p>{location} </p>
                <ul>{tags}</ul>
                <div className="kas-host">
                    {host.name}
                    <img
                        src={host.picture}
                        alt="avatar"
                        className="kas-avatar"
                    />
                </div>
                <div> {rating}</div>
                <Rating/>
                <div className="kas-title">
                    <h2>Descritpion </h2>
                    <Collapse span={description} className="kas-description" />
                </div>
                <div className="kas-title">
                    <h2>Equipements</h2>
                    <Collapse span={equipments} className="kas-equipement" />
                </div>
            </div>
        </div>
    );
}
