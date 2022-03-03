import { combineReducers } from "redux";
import videoReducer from "./video.reducer";
import themeReducer from "./theme.reducer";
// partie hedi important w hawka in3atelha fi index.js ili bara mil src 
// hawka kol manzid reducer in7otou lina w hwka na3mnou fi combineReducers
export default combineReducers({
    videoReducer:videoReducer,
    themeReducer:themeReducer
});
