import {createStore, combineReducers} from "redux";
import reducer from "../reducer/reducer";

const rootReducer = combineReducers({
  r: reducer
});

const store = createStore(rootReducer);
export default store;
