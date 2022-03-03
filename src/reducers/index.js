import { combineReducers } from "redux";
import videoReducer from "./video.reducer";
import themeReducer from "./theme.reducer";

export default combineReducers({
    videoReducer:videoReducer,
    themeReducer:themeReducer
});
