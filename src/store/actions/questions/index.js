import { SET_QUIZ, IS_LOGIN } from "../../types";

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
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const changeQue = (dispatch, data) => {
  fetch(`https://6350088478563c1d82b6fafd.mockapi.io/questions/${data.id}`, {
    method: "PUT", // or 'PUT'
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
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const deleteQue = (id) => {
  return (
    fetch(`https://6350088478563c1d82b6fafd.mockapi.io/questions/${id}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      // .then((response) => response.json())
      .then(async (response) => {
        const res = await response.json();
        return response.status;
      })
      .catch((error) => {
        console.error("Error:", error);
      })
  );
};

export const isLoginChange = (dispatch, data) => {
  return dispatch({
    type: IS_LOGIN,
    payload: data,
  });
};
