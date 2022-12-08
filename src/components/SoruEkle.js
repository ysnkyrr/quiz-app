import React, { useState, useContext, useEffect } from "react";

import { MainContext } from "../store";
import { postQue } from "../store/actions/questions";

function SoruEkle() {
  const { dispatch, state } = useContext(MainContext);
  const [pushQue, setPushQue] = useState({
    question: "",
    answers: [
      { answer: "", isCorrect: true },
      { answer: "", isCorrect: false },
      { answer: "", isCorrect: false },
      { answer: "", isCorrect: false },
    ],
  });
  console.log(pushQue);
  const setAnswer = (index, cvp) => {
    const obj = [...pushQue.answers];
    obj[index] = { answer: cvp, isCorrect: false };
    setPushQue((item) => ({ ...item, answers: obj }));
  };
  const addQue = () => {
    postQue(dispatch, pushQue);
  };
  // useEffect(() => {
  //   const init = async () => {
  //     await postQue(dispatch);
  //   };
  //   init();
  // }, []);
  return (
    <div className="pushQue">
      <input
        type="text"
        placeholder="Soru"
        onChange={(e) =>
          setPushQue((question) => ({
            ...question,
            question: e.target.value,
          }))
        }
      />

      <input
        type="text"
        placeholder="Cevap"
        onChange={(e) => setAnswer(0, e.target.value)}
      />
      <input
        type="text"
        placeholder="Cevap"
        onChange={(e) => setAnswer(1, e.target.value)}
      />
      <input
        type="text"
        placeholder="Cevap"
        onChange={(e) => setAnswer(2, e.target.value)}
      />
      <input
        type="text"
        placeholder="Cevap"
        onChange={(e) => setAnswer(3, e.target.value)}
      />

      <button className="pushQue-btn" onClick={addQue}>
        {" "}
        Ekle
      </button>
    </div>
  );
}

export default SoruEkle;
