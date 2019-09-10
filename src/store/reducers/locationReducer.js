import { GET_LOCATION } from "../actions/types";

const initState = {
  location: ""
}

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
}

export default locationReducer;