import React from "react";
import { useSelector } from "react-redux";
import PlayerScore from "./PlayerScore";

export default function Score() {
    const { turn, isFinished, players, winner } = useSelector((state) => state.basic);

    return (
        <div>
            {!isFinished && players.length <= 1 && <div className="player-score">{`Turn : ${turn}`}</div>}
            {players.length > 1 && 
                <div className="score-grid">
                    {players.map((player) => {
                        return <PlayerScore key={player.id} player={player} />;
                    })}
                </div>
            }
            {isFinished &&  players.length <= 1 && <div className="final-score">{`You finished in ${turn}`}</div>}
            {isFinished &&  players.length > 1 && <div className="final-score">{`${winner.name} is the winner!`}</div>}
        </div>
    );
}
