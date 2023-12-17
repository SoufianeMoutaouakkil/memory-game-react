import React, { useState } from "react";
import { getCardOptions, playerOptions } from "../../../config/basic";
import Select from "./Select";
import basicActions from "../../../services/state/basic/actions"
import { useDispatch } from "react-redux";


const Actions = () => {
    const [option, setOption] = useState("3X4");
    const [player, setPlayer] = useState(1);
    const dispatch = useDispatch();
    const cardOptions = getCardOptions();

    const handleNewGame = () => {
        let config = cardOptions.filter(
            (opt) => opt.value === option
        )[0];
        dispatch(basicActions.newGame(config));
    };

    return (
        <>
            <Select data={cardOptions} handler={[option, setOption]} />
            <Select data={playerOptions} handler={[player, setPlayer]} />
            <button
                className="btn-basic"
                onClick={handleNewGame}
            >
                New Game
            </button>
        </>
    );
};

export default Actions;
