import { useState, useEffect } from "react";
import data from "../../datas/logementsList.json";
import Card from "../Cards/Card";
import "../Cards/card.css";

function Cards() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        setCardsData(data);
    }, []);
    return (
        <div>
            <div className="kas-gallery">
                {cardsData.map((item) => (
                    <Card
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cover={item.cover}
                    />
                ))}
            </div>
        </div>
    );
}
export default Cards;
