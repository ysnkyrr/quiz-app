import React, { useState, useContext, useEffect } from "react";

import { MainContext } from "../store";
import { postQue } from "../store/actions/questions";

function SoruEkle() {
  const { dispatch, state } = useContext(MainContext);
  const [pushQue, setPushQue] = useState({
    question: "",
    answers: [
      { answer: "", isCorrect: false },
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
  const changeValue = (index, cvp) => {
    const crt = [...pushQue.answers];
    crt[index] = { ...crt[index], isCorrect: true };
    setPushQue((item) => ({ ...item, answers: crt }));
    console.log("crt", crt);
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
      <div className="answer-radio-btn">
        <input
          type="text"
          placeholder="Cevap"
          onChange={(e) => setAnswer(0, e.target.value)}
        />
        <input
          type="radio"
          value=""
          name="isCorrect"
          onChange={(e) => changeValue(0, e.target.value)}
        />
      </div>
      <div className="answer-radio-btn">
        <input
          type="text"
          placeholder="Cevap"
          onChange={(e) => setAnswer(1, e.target.value)}
        />
        <input
          type="radio"
          value=""
          name="isCorrect"
          onChange={(e) => changeValue(1, e.target.value)}
        />
      </div>
      <div className="answer-radio-btn">
        <input
          type="text"
          placeholder="Cevap"
          onChange={(e) => setAnswer(2, e.target.value)}
        />
        <input
          type="radio"
          value=""
          name="isCorrect"
          onChange={(e) => changeValue(2, e.target.value)}
        />
      </div>
      <div className="answer-radio-btn">
        <input
          type="text"
          placeholder="Cevap"
          onChange={(e) => setAnswer(3, e.target.value)}
        />
        <input
          type="radio"
          value=""
          name="isCorrect"
          onChange={(e) => changeValue(3, e.target.value)}
        />
      </div>

      <button className="pushQue-btn" onClick={addQue}>
        {" "}
        Ekle
      </button>
    </div>
  );
}

export default SoruEkle;
