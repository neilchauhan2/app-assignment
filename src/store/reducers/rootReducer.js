import { combineReducers } from "redux";
import domainReducer from "./domainReducer";
import personReducer from "./personReducer";

const rootReducer = combineReducers({
    domain: domainReducer,
    person: personReducer  
});

export default rootReducer;