import axios from "axios";
import { GET_ERRORS, GET_MEDICINES, DELETE_MEDICINE } from "./types";

export const createMedicine = (
  medicine,
  username,
  history
) => async dispatch => {
  try {
    await axios.post("http://localhost:8080/medicine", medicine);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
    window.alert("Lek poprawnie dodany do listy leków");
    history.push(`/medicines/${username}`);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getMedicinesForUser = username => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8080/medicine/${username}`);
    dispatch({
      type: GET_MEDICINES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteMedicine = id => async dispatch => {
  if (
    window.confirm(
      `Jesteś pewien, że chcesz usunąć ten lek ? Tej operacji nie można cofnąć`
    )
  )
    await axios.delete(`http://localhost:8080/medicine/${id}`);
  dispatch({
    type: DELETE_MEDICINE,
    payload: id
  });
};
