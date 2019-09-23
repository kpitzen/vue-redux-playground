import { combineReducers } from "redux";
import connected from "./connectedReducer";

const rootReducer = combineReducers({
  connected
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
