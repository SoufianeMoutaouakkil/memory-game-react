import React from "react";
import "./card.css";

const Card = ({ card, onChoose, flipped }) => {
    return (
        <div className={flipped ? "card flipped" : "card"}>
            <div className="front">
                <img src={card.src} alt="front card" />
            </div>
            <div className="back">
                <img
                    src="/img/cover.png"
                    alt="back card"
                    onClick={() => {
                        onChoose(card);
                    }}
                />
            </div>
        </div>
    );
};

export default Card;
