import { GET_LOCATION, SET_SUBDOMAIN } from "./types";

export const getLocation = () => dispatch => {
  console.log(window.location.hostname);
  dispatch({
    type: GET_LOCATION,
    payload: window.location.hostname
  })
}

export const setSubdomain = () => dispatch => {
  let hostname = window.location.hostname.toLowerCase();
  hostname = hostname.replace("-staging", "");
  const hostnameSections = hostname.split(".");
  const subdomain = hostnameSections[0];
  dispatch({
    type: SET_SUBDOMAIN,
    payload: subdomain
  })
};