import React from 'react'

export default function Select({handler, data}) {
    return (
        <select
            className="btn-basic"
            name="schema"
            onChange={(e) => handler[1](e.target.value)}
        >
            {data.map((opt) => (
                <option
                    key={opt.value}
                    value={opt.value}
                    selected={handler[0] === opt.value}
                >
                    {opt.label}
                </option>
            ))}
        </select>
    )
}
