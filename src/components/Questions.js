import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../store";
import { deleteQue, getQuiz, postQue } from "../store/actions/questions";

function Questions() {
  const { dispatch, state } = useContext(MainContext);

  useEffect(() => {
    const init = async () => {
      if (!!state.questions) {
        await getQuiz(dispatch);
      }
    };
    init();
  }, []);

  const deleteQueAction = async (id) => {
    const refreshQue = await deleteQue(id);
    if (refreshQue === 200) {
      await getQuiz(dispatch)
      console.log("yasin");
    }
    console.log("asd", refreshQue);
  };

  return (
    <div className="appp">
      <div className="questions">
        {state.questions.map((item, index) => (
          <div className="questions-item">
            <p className="questions-item-p">{item.question}</p>
            
            <div className="buttons">
              <Link className="change-btn" to={`/Sorular/${item.id}`}>
                Düzenle
              </Link>
              <button
                className="remove-btn"
                onClick={() => deleteQueAction(item.id)}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
