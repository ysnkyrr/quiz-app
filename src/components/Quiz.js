import { useEffect, useState } from "react";
import Login from "./Login";
import SoruEkle from "./SoruEkle";

export default function Quiz() {
  const [secilmisSoru, setSecilmisSoru] = useState(0);
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

  // useEffect(() => {
  //   const item = localStorage.getItem("counter");
  //   if (item) {
  //     setLoginItem(JSON.parse(item).name);
  //     setSecilmisSoru(JSON.parse(item).step);
  //     setDogruCevap(JSON.parse(item).totalCorrect);
  //   }
  // }, []);

  function sonrakiSoruu() {
    const sonrakiSoru = secilmisSoru + 1;
    const items = {
      ...loginItem,
      step: secilmisSoru + 1,
      totalCorrect: currentAnswer ? dugruCevap + 1 : dugruCevap,
    };
    currentAnswer && setDogruCevap(dugruCevap + 1);
    setSecilmisSoru(sonrakiSoru);
    setCurrentAnswer(false);

    if (sorular.length === secilmisSoru + 1) {
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
    setSecilmisSoru(0);
  };
  function oncekiSoruu() {
    const oncekiSoru = secilmisSoru - 1;
    if (secilmisSoru > 0) {
      setSecilmisSoru(oncekiSoru);
    }
  }

  const [sorular, setSorular] = useState([
    {
      soru: "En sevdiğim renk nedir?",
      cevaplar: [
        { cevap: "Siyah", dogru: true },
        { cevap: "Mavi", dogru: false },
        { cevap: "Kırmızı", dogru: false },
        { cevap: "Yeşil", dogru: false },
      ],
    },
    {
      soru: "Doğum günüm ne zaman?",
      cevaplar: [
        { cevap: "11 Ekim", dogru: false },
        { cevap: "6 Ocak", dogru: false },
        { cevap: "13 Kasım", dogru: true },
        { cevap: "21 Temmuz", dogru: false },
      ],
    },
    {
      soru: "Kaç yaşındayım?",
      cevaplar: [
        { cevap: "22", dogru: false },
        { cevap: "19", dogru: false },
        { cevap: "25", dogru: true },
        { cevap: "21", dogru: false },
      ],
    },
    {
      soru: "Yaş Kaç",
      cevaplar: [
        { cevap: "25", dogru: false },
        { cevap: "21", dogru: false },
        { cevap: "22", dogru: false },
        { cevap: "26", dogru: true },
      ],
    },
  ]);
  console.log(sorular);
  return (
    <div className="appp">
      {loginItem.isLogin === false ? (
        <Login loginItem={loginItem} setLoginItem={setLoginItem} />
      ) : sorular.length > secilmisSoru ? (
        <>
          <div className="steps">
            {sorular.map((item, index) => (
              <div
                className={`step-item ${index <= secilmisSoru ? "active" : ""}`}
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
              <p>{sorular[secilmisSoru].soru}</p>
            </div>
            <div className="answer">
              {sorular[secilmisSoru].cevaplar.map((cevaplar, index) => (
                <button
                  className="answer-item"
                  onClick={() => setCurrentAnswer(cevaplar.dogru)}
                >
                  {cevaplar.cevap}
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
                        {item.name} : {sorular.length}/{item.trueAnswer}
                      </h4>
                    ))}
                </div>
              </div>
            </aside>
            <h1>SINAV SONUCU</h1>
            <h2>
              {sorular.length}/{dugruCevap}
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
