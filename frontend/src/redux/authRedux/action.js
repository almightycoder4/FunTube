import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "POST",
    url: `/auth/signin`,
    baseURL: process.env.URL,
    data: payload,
  })
    .then((res) => dispatch({ type: types.LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE, payload: err }));
};
const logout = (dispatch) => {
  dispatch({ type: types.LOGOUT_REQUEST });
};
export { login, logout };
