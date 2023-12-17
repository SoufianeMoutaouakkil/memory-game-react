import { playerList } from "../../../config/basic";

const getActiveIndex = (players) => {
    let activePlayerIndex = -1;
    players.every((player, index) => {
        if (player.isActive) {
            activePlayerIndex = index;
            return false;
        }
        return true;
    });
    return activePlayerIndex;
};

export default {
    getPlayers: (conf) => {
        let players = playerList.slice(0, (conf.value));
        return players.map((player) => {
                let isActive = player.id === 1;
                return { ...player, score: 0, isActive };
            });
    },
    setNextPlayer: (players) => {
        const nbPlayers = players.length;
        const activePlayerIndex = getActiveIndex(players);
        
        players[
            (activePlayerIndex + 1) % nbPlayers
        ].isActive = true;
        players[activePlayerIndex].isActive = false;
        return players;
    },
    incrementScore: (players) => {
        const activePlayerIndex = getActiveIndex(players);
        players[activePlayerIndex].score = players[activePlayerIndex].score + 1;
        return players;
    },
    getWinner: (players) => {
        return players.sort((a, b) => b.score - a.score)[0];
    },
};
