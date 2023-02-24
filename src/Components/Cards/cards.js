import { useState, useEffect } from "react";
import data from "../Models/logementList.json";
import Card from "./card";
import "./card.css";

function Cards() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        setCardsData(data);
    }, []);
    return (
        <div>
            <ul className="kas-cards">
                {cardsData.map((item) => (
                    <Card key={item.id} title={item.title} cover={item.cover} />
                ))}
            </ul>
        </div>
    );
}
export default Cards;
