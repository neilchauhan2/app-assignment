import axios from "axios";
import { CHECK_AVAILABILITY, REGISTER_DOMAIN } from "../actions/types";
// Check Availability => method to check availability of domain
export const checkAvailability = domain => dispatch => {
  axios.get(`https://app.api.convin.ai/domains/availability?name=${domain}`, tokenConfig())
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: CHECK_AVAILABILITY,
        payload: data
      })
    })
}

// Setup config/headers and token
export const tokenConfig = () => {
  // Setting up JWT for authorization
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTY3NDMzNTcxLCJlbWFpbCI6ImFkbWluQGNvbnZpbi5haSJ9.89f8tqaVy16JRbCOqoWIHFwQ1m5dQnVe8fEqLrtziTU";

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // if token available add it to headers
  if (token) {
    config.headers["JWT"] = token;
  }

  return config;
};