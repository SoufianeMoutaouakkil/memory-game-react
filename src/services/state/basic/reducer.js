import * as actionTypes from "./actionTypes";
import initialState from "./initialState";

export default (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case actionTypes.SET_CARDS:
            newState.cards = action.payload;
            break;
        case actionTypes.INCREMENT_TURN:
            newState.turn = (state.turn ?? 0 )+ 1;
            break;
        case actionTypes.SET_CONFIG:
            newState.config = action.payload;
            break;
        case actionTypes.IS_FINISHED:
            newState.isFinished = newState.cards.filter((card) => !card.matched).length === 0;
            break;
        case actionTypes.NEW_GAME:
            console.log("reducer : actionTypes.NEW_GAME")
            newState = {...initialState};
            newState.cards = action.payload.cards;
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
        default:
            break;
    }
    return newState;
};
