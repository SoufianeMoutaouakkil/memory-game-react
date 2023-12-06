import { useEffect, useState } from "react";
import "./basic.css";
import Card from "../../components/basic/card/Card";
import Actions from "../../components/basic/actions/Actions";
import { items } from "../../config/basic/options";

function Basic() {
    const [cards, setCards] = useState([]);
    const [config, setConfig] = useState();
    const [choiceOne, setChoiceOne] = useState();
    const [choiceTwo, setChoiceTwo] = useState();
    const [turn, setTurn] = useState(0);
    const [finished, setFinished] = useState(false);

    const shuffle = (options) => {
        setConfig(options);
        const usedCards = items.slice(0, (options.cols * options.rows) / 2);
        const shuffledCards = [...usedCards, ...usedCards]
            .sort(() => Math.random() - 0.5)
            .map((card) => {
                return { ...card, id: Math.random(), mached: false };
            });

        setCards(shuffledCards);
        setTurn(0);
        setFinished(false);
    };

    const onChoose = (card) => {
        if (!choiceOne || !choiceTwo)
            choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            handleMatching();
        }
    }, [choiceOne, choiceTwo]);

    const handleMatching = () => {
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
                if (isFinished(newCards)) {
                    setFinished(true);
                }
                return newCards;
            });
            setupNewTurn();
        } else {
            setTimeout(() => {
                setupNewTurn();
            }, 1000);
        }
    };
    const setupNewTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurn((prevTurn) => prevTurn + 1);
    };
    const isFinished = (cards) => {
        const unmatched = cards.filter((card) => !card.matched);
        return unmatched.length === 0;
    };
    return (
        <div className="basic">
            <h1>Magic Match</h1>
            <Actions shuffle={shuffle} />
            {cards.length > 0 && (
                <>
                    {!finished && <h4>{`Trun : ${turn}`}</h4>}
                    {finished && <h1>{`You finished in ${turn}`}</h1>}
                    <div className={`card-table cols-${config.cols}`}>
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                onChoose={onChoose}
                                flipped={
                                    card === choiceOne ||
                                    card === choiceTwo ||
                                    card.matched
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
