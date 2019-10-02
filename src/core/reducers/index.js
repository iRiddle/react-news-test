import { combineReducers } from "redux";
import news from "core/reducers/news";

const rootReducer = combineReducers({ news });

export default rootReducer;
