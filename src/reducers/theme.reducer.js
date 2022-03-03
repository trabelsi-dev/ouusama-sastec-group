import {
    GET_THEME,

} from "../actions/theme.action";

const initialState = {};

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_THEME:
            return action.payload;
        default:
            return state;
    }
}