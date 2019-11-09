import axios from "axios";
import { GET_ERRORS, GET_USER } from "./types";

export const createUser = (user, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/user/register", user);
    history.push("");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getUser = (login, password, history) => async dispatch => {
  try {
    const res = await axios.get(
      `http://localhost:8080/user/${login}/${password}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
    history.push(`/medicines/${login}`);
  } catch (err) {
    window.alert("Username or password is invalid!");
  }
};
