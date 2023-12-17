import * as actionTypes from "./actionTypes";
import initialState from "./initialState";
import playerRepo from "../../repository/basic/player";

export default (state = {}, action) => {
    let newState = { ...state };
    let nbPlayers = newState.players?.length ?? 1;
    switch (action.type) {
        case actionTypes.SET_CARDS:
            newState.cards = action.payload;
            break;
        case actionTypes.LAUNCH_NEW_TURN:
            if (nbPlayers <= 1) newState.turn = (state.turn ?? 0) + 1;
            else if (newState.lastAction !== "match")
                newState.players = [...playerRepo.setNextPlayer(newState.players)];
            else newState.lastAction = "";

            newState.choiceTwo = null;
            newState.choiceOne = null;

            break;
        case actionTypes.SET_CONFIG:
            newState.config = action.payload;
            break;
        case actionTypes.IS_FINISHED:
            newState.isFinished =
                newState.cards.filter((card) => !card.matched).length === 0;
            if (newState.isFinished && nbPlayers > 1 ) {
                newState.winner = playerRepo.getWinner(newState.players);
            }
            break;
        case actionTypes.NEW_GAME:
            console.log("reducer : actionTypes.NEW_GAME");
            newState = { ...initialState };
            newState.cards = action.payload.cards;
            newState.players = action.payload.players;
            newState.config = action.payload.config;
            break;
        case actionTypes.HANDLE_MATCHED:
            newState.cards = state.cards.map((oldCard) => {
                if (oldCard.src === action.payload) {
                    return { ...oldCard, matched: true };
                } else {
                    return oldCard;
                }
            });
            newState.players = [...playerRepo.incrementScore(newState.players)];
            newState.lastAction = "match";
            console.log(
                "HANDLE_MATCHED",
                "newState.cards",
                newState.cards,
                "state.cards",
                state.cards,
                "action.payload",
                action.payload
            );
            break;
        case actionTypes.CHOOSE_CARD:
            if (!newState.choiceOne || !newState.choiceTwo)
                if (newState.choiceOne) newState.choiceTwo = action.payload;
                else newState.choiceOne = action.payload;
            console.log("reducer.chooseCard newState: ", newState)
            break;
        default:
            break;
    }
    return newState;
};
