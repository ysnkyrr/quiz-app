import React from "react";
import { useEffect, useState, useContext } from "react";
import { MainContext } from "../store";
import { getQuiz } from "../store/actions/questions";

function Questions(oneQuestion, setCurrentAnswer) {
  const { dispatch, state } = useContext(MainContext);

  useEffect(() => {
    const init = async () => {
      await getQuiz(dispatch);
    };
    init();
  }, []);
  return (
    <div className="appp">
      <div className="questions">
        {state.questions.map((item, index) => (
          <div className="questions-item">
            <p className="questions-item-p">{item.question}</p>
            <div className="buttons">
              <button className="change-btn">Düzenle</button>
              <button className="remove-btn">Sil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
