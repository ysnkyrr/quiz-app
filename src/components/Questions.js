import React from "react";
import { useEffect,  useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../store";
import { deleteQue, getQuiz } from "../store/actions/questions";
import Layout from "./Layout/Layout";

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
    }
  };

  return (
    <Layout>
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
    </Layout>
  );
}

export default Questions;
