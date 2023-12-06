import { useEffect, useState } from "react";
import "./basic.css";
import Card from "../../components/basic/Card";

const items = [
    { src: "/img/item1.png" },
    { src: "/img/item2.png" },
    { src: "/img/item3.png" },
    { src: "/img/item4.png" },
    { src: "/img/item5.png" },
    { src: "/img/item6.png" },
];
function Basic() {
    const [cards, setCards] = useState([]);
    const [choiceOne, setChoiceOne] = useState();
    const [choiceTwo, setChoiceTwo] = useState();
    const [turn, setTurn] = useState(0);

    const shuffle = () => {
        const shuffledCards = [...items, ...items]
            .sort(() => Math.random() - 0.5)
            .map((card) => {
                return { ...card, id: Math.random(), mached: false };
            });
        setCards(shuffledCards);
    };

    const onChoose = (card) => {
        if (!choiceOne || !choiceTwo)
            choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    useEffect(() => {
        console.log("useEffect");
        if (choiceOne && choiceTwo) {
            console.log("useEffect - choiceTwo");
            if (choiceOne.src === choiceTwo.src) {
                setCards((oldCards) => {
                    const newCards = oldCards.map((oldCard) => {
                        if (
                            oldCard.src === choiceOne.src ||
                            oldCard.src === choiceTwo.src
                        ) {
                            return { ...oldCard, matched: true };
                        } else {
                            return oldCard;
                        }
                    });
                    return newCards;
                });
            } else {
                console.log("NO matches Pffffff!");
            }
            setupNewTurn();
        }
    }, [choiceOne, choiceTwo]);

    const setupNewTurn = () => {
        setTimeout(() => {
            console.log("timeout");
            setChoiceOne(null);
            setChoiceTwo(null);
            setTurn((prevTurn) => prevTurn + 1);
        }, 2000);
    };

    return (
        <div className="basic">
            <h1>Magic Match</h1>
            <button onClick={shuffle}>New Game</button>
            {cards.length > 0 && (
                <>
                    <h4>{`Trun : ${turn}`}</h4>
                    <div className="card-table">
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                onChoose={onChoose}
                                flipped={
                                    card === choiceOne ||
                                    card === choiceTwo ||
                                    card.mached
                                }
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Basic;
