import React, { useState } from "react";
import { getOptions } from "../../../config/basic/options";

const Actions = ({ shuffle }) => {
    const [option, setOption] = useState("3X4");
    const options = getOptions();

    return (
        <>
            <select
                className="btn-basic"
                name="schema"
                onChange={(e) => setOption(e.target.value)}
            >
                {options.map((opt) => (
                    <option
                        key={opt.value}
                        value={opt.value}
                        selected={option === opt.value}
                    >
                        {opt.label}
                    </option>
                ))}
            </select>
            <button
                className="btn-basic"
                onClick={() => {
                    let config = options.filter(
                        (opt) => opt.value === option
                    )[0];
                    shuffle(config);
                }}
            >
                New Game
            </button>
        </>
    );
};

export default Actions;
