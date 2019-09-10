import { GET_LOCATION, SET_SUBDOMAIN } from "../actions/types";

const initState = {
  location: "",
  subdomain: ""
}

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        location: action.payload
      }
    case SET_SUBDOMAIN:
      return {
        ...state,
        subdomain: action.payload
      }
    default:
      return state;
  }
}

export default locationReducer;