import {CLICK_MENU_UPDATE} from '../actions/actionsTypes'

const initialState = {
    open: false
}

export const clickMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_MENU_UPDATE:
            return {...state, open: action.open}
        default:
            return state
    }
}