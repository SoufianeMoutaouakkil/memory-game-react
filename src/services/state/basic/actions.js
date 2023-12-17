import * as actionsType from "./actionTypes";
import cardRepo from "../../repository/basic/card";

export default {
    setNbPlayers: (nb = 1) => async (dispatch) => {
        dispatch({
            type: actionsType.SET_NB_PLAYERS,
            payload: nb,
        });
    },
    handleMatching: (src) => async (dispatch) => {
        dispatch({
            type: actionsType.HANDLE_MATCHED,
            payload: src,
        });
        dispatch({
            type: actionsType.IS_FINISHED
        });
    },
    newGame: (config) => async (dispatch) => {
        console.log("newGame")
        console.log("config", config)
        const cards = cardRepo.getCards(config);
        dispatch({
            type: actionsType.NEW_GAME,
            payload: {cards, config},
        });
    },
    incTurn: () => async (dispatch) => {
        dispatch({
            type: actionsType.INCREMENT_TURN
        });
    },
    incPlayer: (playerID) => async (dispatch) => {
        dispatch({
            type: actionsType.INCREMENT_PLAYER,
            payload: playerID
        });
    },
}
