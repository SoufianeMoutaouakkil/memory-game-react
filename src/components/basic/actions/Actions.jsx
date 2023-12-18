import React, { useState, useEffect } from "react";
import { getCardOptions, playerOptions } from "../../../config/basic";
import Select from "./Select";
import basicActions from "../../../services/state/basic/actions";
import { useDispatch } from "react-redux";
import "./actions.css";

const Actions = () => {
    const [option, setOption] = useState();
    const [player, setPlayer] = useState(1);
    const dispatch = useDispatch();
    const cardOptions = getCardOptions();

    useEffect(() => {
        setOption(cardOptions[0].value);
    }, []);

    const handleNewGame = () => {
        let cardConfig = cardOptions.filter((opt) => opt.value === option)[0];
        let playerConfig = playerOptions.filter(
            (playerOption) => playerOption.value === +player
        )[0];
        dispatch(
            basicActions.newGame({ cards: cardConfig, players: playerConfig })
        );
    };

    return (
        <div className="actions-list">
            <Select data={cardOptions} handler={[option, setOption]} />
            <Select data={playerOptions} handler={[player, setPlayer]} />
            <button className="btn-basic" onClick={handleNewGame}>
                New Game
            </button>
        </div>
    );
};

export default Actions;
