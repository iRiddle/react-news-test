import { combineReducers } from "redux";
import news from "core/reducers/news";
import user from "core/reducers/login";
import userInfo from "core/reducers/userInfo";

const rootReducer = combineReducers({ news, user, userInfo });

export default rootReducer;
