import {clickMenuReducer} from './clickMenuReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickMenuState: clickMenuReducer
})