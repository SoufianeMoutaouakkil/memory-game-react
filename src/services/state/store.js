import { createStore, applyMiddleware } from 'redux'
import  {thunk}  from 'redux-thunk'

import mainReducer from './mainReducer'
import initialState from "./initialState"

export default createStore(mainReducer, initialState,
    applyMiddleware(thunk)
)
