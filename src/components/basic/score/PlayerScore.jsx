import React from "react";
import "./score.css";

export default function PlayerScore({ player }) {
    const classList = "player-score " + (player.isActive ? "active" : "")
    return (
        <div className={classList}>
            <h4>{player.name} : </h4>
            <h5>{player.score}</h5>
        </div>
    );
}
