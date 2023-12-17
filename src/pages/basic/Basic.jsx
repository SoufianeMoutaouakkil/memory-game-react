import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../components/basic/card/Card";
import Actions from "../../components/basic/actions/Actions";
import Score from "../../components/basic/score/Score";
import basicActions from "../../services/state/basic/actions";

import "./basic.css";

function Basic() {
    const { cards, config } = useSelector(state => state.basic);
    const dispatch = useDispatch();

    const [choiceOne, setChoiceOne] = useState();
    const [choiceTwo, setChoiceTwo] = useState();

    const onChoose = (card) => {
        if (!choiceOne || !choiceTwo)
            choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            handleMatching();
        }
    }, [choiceOne, choiceTwo]);

    useEffect(() => {
        console.log("useEffect cards in basic : ", cards)
    }, [cards]);

    const handleMatching = () => {
        if (choiceOne.src === choiceTwo.src) {
            dispatch(basicActions.handleMatching(choiceOne.src));
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
        dispatch(basicActions.incTurn());
    };

    return (
        <div className="basic">
            <h1>Magic Match</h1>
            <Actions />
            {cards.length > 0 && (
                <>
                    <Score />
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
