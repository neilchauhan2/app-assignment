import axios from "axios";

import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

// Register User
export const register = userCredentials => (dispatch, getState) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
    //get domain for requests
  const domain = getState().location.subdomain;

  const body = JSON.stringify({
    ...userCredentials
  });

  axios
    .post(`https://${domain}.api.convin.ai/persons/create_admin/`, body, config)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      });
    })
};

// login user
export const login = userCredentials => (dispatch, getState) => {
  const body = JSON.stringify({
    ...userCredentials
  });
    //get domain for requests
     const domain = getState().location.subdomain;
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  axios
    .post(
      `https://${domain}.api.convin.ai/persons/get_token/`,

      body,
      config
    )
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
    })
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};