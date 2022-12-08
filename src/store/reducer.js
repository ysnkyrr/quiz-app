import * as types from "./types";
import { initialState } from "./state";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SET_QUIZ:
      console.log(payload); 
      return { ...state, questions: payload };
    case types.ADD_QUE:
      return { ...state, question: { ...payload } };
    default:
      return state;
  }
}
