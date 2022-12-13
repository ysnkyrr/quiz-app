import * as types from "./types";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_QUIZ:
      console.log(payload);
      return { ...state, questions: payload };
    case types.ADD_QUE:
      return { ...state, question: { ...payload } };
    case types.IS_LOGIN:
      return { ...state, isLogin: payload };
    default:
      return state;
  }
}
