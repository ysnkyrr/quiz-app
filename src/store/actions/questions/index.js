import { ADD_QUE, SET_QUIZ } from "../../types";

export const getQuiz = (dispatch) => {
  fetch("https://6350088478563c1d82b6fafd.mockapi.io/questions", {
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: SET_QUIZ,
        payload: data,
      });
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const postQue = (dispatch, data) => {
  fetch("https://6350088478563c1d82b6fafd.mockapi.io/questions", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // dispatch({
      //   type: ADD_QUE,
      //   payload: data,
      // });
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
