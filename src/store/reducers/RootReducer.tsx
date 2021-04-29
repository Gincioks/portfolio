import { combineReducers } from "redux";
import languageReducer from "./LanguageReducer";

const RootReducer = combineReducers({ language: languageReducer });

export default RootReducer;
