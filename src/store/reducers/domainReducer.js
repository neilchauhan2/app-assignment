import { CHECK_AVAILABILITY, REGISTER_DOMAIN } from "../actions/types";

const initState = {
status: "",
message: "",
available: ""
};

const domainReducer = (state=initState, action) => {
    switch(action.type) {
      case CHECK_AVAILABILITY: 
      return {
        ...state,
        ...action.payload
      };
      default:
        return state;
    }
}

export default domainReducer;