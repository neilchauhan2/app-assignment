import { CHECK_AVAILABILITY, REGISTER_DOMAIN } from "../actions/types";

const initState = {
  name: null,
  status: "",
  message: "",
  available: "",
  id: ""
};

const domainReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECK_AVAILABILITY:
      return {
        ...state,
        ...action.payload
      };

    case REGISTER_DOMAIN:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}

export default domainReducer;