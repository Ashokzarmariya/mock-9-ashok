import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";
import { postReducer } from "./Post/Reducer";


const rootReducers = combineReducers({
 auth: authReducer,
 post:postReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
