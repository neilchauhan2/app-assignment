import { GET_LOCATION } from "./types";

export const getLocation = () => dispatch => {
  console.log(window.location.hostname);
  dispatch({
    type: GET_LOCATION,
    payload: window.location.hostname
  })
}