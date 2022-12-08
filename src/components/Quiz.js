import { useEffect, useState, useContext } from "react";
import Login from "./Login";
import SoruEkle from "./SoruEkle";
import { MainContext } from "../store";
import { getQuiz } from "../store/actions/questions";

export default function Quiz() {
  const { dispatch, state } = useContext(MainContext);
  const [oneQuestion, setOneQuestion] = useState(0);
  const [dugruCevap, setDogruCevap] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(false);
  const [loginItem, setLoginItem] = useState({
    isLogin: false,
    name: "",
    email: "",
  });
  const [showQue, setShowQue] = useState(false);
  const [arre, setArre] = useState([
    { name: "yasin", email: "ysnkyr06@gmail.com", trueAnswer: 3 },
    { name: "asin", email: "ysnkyr06@gmail.com", trueAnswer: 4 },
    { name: "sin", email: "ysnkyr06@gmail.com", trueAnswer: 1 },
  ]);
  useEffect(() => {
    const init = async () => {
      await getQuiz(dispatch);
    };
    init();
  }, []);

  function sonrakiSoruu() {
    const sonrakiSoru = oneQuestion + 1;
    const items = {
      ...loginItem,
      step: oneQuestion + 1,
      totalCorrect: currentAnswer ? dugruCevap + 1 : dugruCevap,
    };
    currentAnswer && setDogruCevap(dugruCevap + 1);
    setOneQuestion(sonrakiSoru);
    setCurrentAnswer(false);

    if (state.questions?.length === oneQuestion + 1) {
      setArre([
        ...arre,
        {
          name: loginItem.name,
          email: loginItem.email,
          trueAnswer: dugruCevap,
        },
      ]);
      localStorage.removeItem("counter");
    }
    localStorage.setItem("counter", JSON.stringify(items));
  }
  const refresh = () => {
    localStorage.removeItem("counter");
    setDogruCevap(0);
    setOneQuestion(0);
  };
  function oncekiSoruu() {
    const oncekiSoru = oneQuestion - 1;
    if (oneQuestion > 0) {
      setOneQuestion(oncekiSoru);
    }
  }

  return (
    <div className="appp">
      {loginItem.isLogin === false ? (
        <Login loginItem={loginItem} setLoginItem={setLoginItem} />
      ) : state.questions?.length > oneQuestion ? (
        <>
          <div className="steps">
            {state.questions?.map((item, index) => (
              <div
                className={`step-item ${index <= oneQuestion ? "active" : ""}`}
              ></div>
            ))}
          </div>
          <button className="previous-question" onClick={oncekiSoruu}>
            Previous Question
          </button>

          <div className="container-item">
            <div className="whQuestion">
              <p>QUESTİON</p>
            </div>
            <div className="question">
              <p>{state.questions?.[oneQuestion].question}</p>
            </div>
            <div className="answer">
              {state.questions?.[oneQuestion].answers.map((answers, index) => (
                <button
                  className="answer-item"
                  onClick={() => setCurrentAnswer(answers.isCorrect)}
                >
                  {answers.answer}
                </button>
              ))}
            </div>
            <button className="next-question" onClick={sonrakiSoruu}>
              Next Question →<p></p>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="result">
            <aside className="arrangement">
              <h3>Arrangement</h3>
              <div className="arrangement-items">
                <div className="arrangement-item">
                  {arre
                    .slice(-3)
                    .reverse()
                    .map((item, index) => (
                      <h4 key={index}>
                        {item.name} : {state.questions?.length}/
                        {item.trueAnswer}
                      </h4>
                    ))}
                </div>
              </div>
            </aside>
            <h1>SINAV SONUCU</h1>
            <h2>
              {state.questions?.length}/{dugruCevap}
            </h2>
            <button className="refresh-btn" onClick={refresh}>
              Çözmek İster misin?
            </button>
          </div>
        </>
      )}
    </div>
  );
}