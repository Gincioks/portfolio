import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import burgerReducer from "./burgerBuilderReducer";
import orderReducer from "./orderReducer";

const RootReducer = combineReducers({
  burgerBuilder: burgerReducer,
  order: orderReducer,
  auth: authReducer,
});

export default RootReducer;
