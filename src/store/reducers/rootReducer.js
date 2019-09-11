import { combineReducers } from "redux";
import domainReducer from "./domainReducer";
import personReducer from "./personReducer";
import locationReducer from "./locationReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    domain: domainReducer,
    person: personReducer,
    location: locationReducer,
    auth: authReducer
});

export default rootReducer;