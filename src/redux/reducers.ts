import { combineReducers } from "redux";
import reducer from "./repositories/reduces";


const rootReducers = combineReducers({
    repo: reducer
})


export default rootReducers;

// type annotations for useSelector
export type RootState = ReturnType<typeof rootReducers>;