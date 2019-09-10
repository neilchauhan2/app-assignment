import { combineReducers } from "redux";
import domainReducer from "./domainReducer";
import personReducer from "./personReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
    domain: domainReducer,
    person: personReducer,
    location: locationReducer
});

export default rootReducer;