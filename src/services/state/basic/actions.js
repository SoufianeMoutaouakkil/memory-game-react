import * as actionsType from "./actionTypes";
import cardRepo from "../../repository/basic/card";
import playerRepo from "../../repository/basic/player";

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
        const cards = cardRepo.getCards(config.cards);
        const players = playerRepo.getPlayers(config.players);
        dispatch({
            type: actionsType.NEW_GAME,
            payload: {cards, players, config},
        });
    },
    newTurn: () => async (dispatch) => {
        dispatch({
            type: actionsType.LAUNCH_NEW_TURN
        });
    },
    incPlayer: (playerID) => async (dispatch) => {
        dispatch({
            type: actionsType.INCREMENT_PLAYER,
            payload: playerID
        });
    },
    chooseCard: (card) => async (dispatch) => {
        console.log("actions.chooseCard: ", card)
        dispatch({
            type: actionsType.CHOOSE_CARD,
            payload: card
        });
    },
}
