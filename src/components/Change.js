import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainContext } from "../store";
import { changeQue, getQuiz, isLoginChange } from "../store/actions/questions";
import Layout from "./Layout/Layout";

function Change() {
  const navigate = useNavigate();
  const { dispatch, state } = useContext(MainContext);
  const params = useParams();
  const [changeQuestions, setChangeQuestions] = useState({});
  useEffect(() => {
    const init = async () => {
      //if control check
      if (typeof window !== undefined) {
        const checkhLogin = localStorage.getItem("isLogin");
        console.log(checkhLogin);
        if (!!checkhLogin) {
          isLoginChange(dispatch, true);
        } else {
          navigate("/login");
        }
      }
      if (!!state.questions) {
        await getQuiz(dispatch);
        setChangeQuestions(
          state.questions.filter((item) => item.id === params.id)[0]
        );
      }
    };
    init();
  }, []);

  const setAnswer = (index, cvp) => {
    const obj = [...changeQuestions.answers];
    obj[index] = { answer: cvp, isCorrect: false };
    setChangeQuestions((item) => ({ ...item, answers: obj }));
  };
  const changeQueAction = async () => {
    await changeQue(dispatch, changeQuestions);
    alert("Soru başarıyla değiştirildi.");
    navigate("/Sorular");
  };
  // useEffect(() => {
  //   alert("Soru başarıyla düzenlendi.");
  //   navigate("/Sorular");
  // }, [changeQueAction]);

  return (
    <Layout>
      <div>
        <div className="pushQue">
          <textarea
            className="input-width"
            value={changeQuestions?.question}
            type="text"
            placeholder="Soru"
            onChange={(e) =>
              setChangeQuestions((question) => ({
                ...question,
                question: e.target.value,
              }))
            }
          />

          <input
            value={changeQuestions?.answers?.[0].answer}
            type="text"
            placeholder="Cevap"
            onChange={(e) => setAnswer(0, e.target.value)}
          />
          <input
            value={changeQuestions?.answers?.[1].answer}
            type="text"
            placeholder="Cevap"
            onChange={(e) => setAnswer(1, e.target.value)}
          />
          <input
            value={changeQuestions?.answers?.[2].answer}
            type="text"
            placeholder="Cevap"
            onChange={(e) => setAnswer(2, e.target.value)}
          />
          <input
            value={changeQuestions?.answers?.[3].answer}
            type="text"
            placeholder="Cevap"
            onChange={(e) => setAnswer(3, e.target.value)}
          />

          <button className="pushQue-btn btn-weight" onClick={changeQueAction}>
            Düzenle
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Change;
