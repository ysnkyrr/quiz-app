import { useState } from "react";

export default function Container() {
  const [secilmisSoru, setSecilmisSoru] = useState(0);
  const [dugruCevap, setDogruCevap] = useState(true);

  const dogruSay = () => {
    if (sorular.cevaplar.dogru = true) {
      setDogruCevap(dugruCevap+1)
      alert("doğru cevap")
    }
  };

  function sonrakiSoruu() {
    const sonrakiSoru = secilmisSoru + 1;
    if (sonrakiSoru < sorular.length) {
      setSecilmisSoru(sonrakiSoru);
    } else {alert("Sınavınız Bitmiştir")
    }
  }
  function oncekiSoruu() {
    const oncekiSoru = secilmisSoru -1;
    if (oncekiSoru < sorular.length){
        setSecilmisSoru(oncekiSoru);   
    }
  }
  const sorular = [
    {
      soru: "En sevdiğim renk nedir?",
      cevaplar: [
        { cevap: "siyah", dogru: true },
        { cevap: "mavi", dogru: false },
        { cevap: "kırmızı", dogru: false },
        { cevap: "yeşil", dogru: false },
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
      soru: "Arabayı nasıl kullanırım?",
      cevaplar: [
        { cevap: "Manuel,yavaş", dogru: false },
        { cevap: "Otomatik,yavaş", dogru: false },
        { cevap: "Otomatik,hızlı", dogru: false },
        { cevap: "Manuel,hızlı", dogru: true },
      ],
    },
  ];

  return (
    <div className="appp">
      <div className="container">
        <div className="steps">
          <div className="steps-item-1"></div>
          <div className="steps-item-1"></div>
          <div className="steps-item-1"></div>
          <div className="steps-item-1"></div>
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
            {sorular[secilmisSoru].cevaplar.map((cevaplar) => (
              <button onClick={dogruSay}>
                <label>{cevaplar.cevap}</label>
              </button>
            ))}
          </div>
          <button className="next-question" onClick={sonrakiSoruu}>
            Next Question →<p>{setDogruCevap}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
