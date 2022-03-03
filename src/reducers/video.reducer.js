import {
    GET_VIDEO,

} from "../actions/video.action";

const initialState = {};

export default function videoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEO:
            // lina data ta3 posts kol mawjouda fi action.payload
            return action.payload;
        default:
            return state;
    }
}



