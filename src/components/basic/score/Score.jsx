import React from 'react'
import { useSelector } from 'react-redux';

export default function Score() {
  const { turn, isFinished } = useSelector(state => state.basic);

  return (
    <div>
        {!isFinished && <h4>{`Trun : ${turn}`}</h4>}
        {isFinished && <h1>{`You finished in ${turn}`}</h1>}
    </div>
  )
}
