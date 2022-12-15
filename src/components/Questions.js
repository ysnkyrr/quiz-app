import React from "react";
import { useEffect, useContext  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainContext } from "../store";
import { deleteQue, getQuiz, isLoginChange } from "../store/actions/questions";
import Layout from "./Layout/Layout";

function Questions() {
  const navigate = useNavigate();
  const { dispatch, state } = useContext(MainContext);

  useEffect(() => {
    const init = async () => {
      if (typeof window !== undefined) {
        const checkhLogin = localStorage.getItem("isLogin");
        console.log(checkhLogin);
        if (!!checkhLogin) {
         isLoginChange(dispatch, true);
        }else{
          navigate("/login");
        }
      }
      
      if (!!state.questions) {
        await getQuiz(dispatch);
      }
    };
    init();
    
  }, []);

  
  

  const deleteQueAction = async (id) => {
    const refreshQue = await deleteQue(id);
    if (refreshQue === 200) {
      await getQuiz(dispatch);
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
                <Link className="change-btn"  to={`/Sorular/${item.id}`}>
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
