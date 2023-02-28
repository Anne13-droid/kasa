import React from "react";
import "./logements.css";
import { Navigate, useParams } from "react-router-dom";
import data from "../../datas/logementsList.json";
import NotFound from "../NotFound/notFound";
import Pictures from "../../Components/Pictures/pictures";
import Description from "../../Components/Description/description";
import Equipments from "../../Components/Equipments/equipments";

export default function Logement() {
    const { logementId } = useParams;

    const appart = data.find((appart) => appart.id === logementId);
    const { id, title, location, tags, host, rating } = appart || {};

    if (appart === undefined) {
        <Navigate to="/error" replace={<NotFound />} />;
    } else {
        return (
            <div key={id} className="kas-logement">
                <Pictures />
                <h1>{title}</h1>
                <p>{location} </p>
                <ul>
                    <li>{tags}</li>
                </ul>
                <ul>
                    <li>{host}</li>
                </ul>
                <div>{rating} </div>
                <Description />
                <Equipments />
            </div>
        );
    }
}
