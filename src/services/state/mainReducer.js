import { combineReducers } from 'redux'
import basicReducer from './basic/reducer'

export default combineReducers({
    basic: basicReducer,
})
