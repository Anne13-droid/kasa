import { useState, useEffect } from "react";
import data from "../../datas/logementsList.json";
import Card from "../Cards/card";
import "../Cards/card.css";

function Cards() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        setCardsData(data);
    }, []);
    return (
        <div>
            <ul className="kas-cards">
                {cardsData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))}
            </ul>
        </div>
    );
}
export default Cards;
