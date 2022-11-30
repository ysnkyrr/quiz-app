import React, { useState } from "react";

function SoruEkle({ setSorular }) {
  const [pushQue, setPushQue] = useState({
    soru: "",
    cevaplar: [
      { cevap: "", dogru: true },
      { cevap: "", dogru: false },
      { cevap: "", dogru: false },
      { cevap: "", dogru: false },
    ],
  });

  const setAnswer = (index, cvp) => {
    const obj = [...pushQue.cevaplar];
    obj[index] = { cevap: cvp, dogru: false };
    setPushQue((item) => ({ ...item, cevaplar: obj }));
  };
  console.log(pushQue);
  return (
    <div setSorular={setSorular} className="pushQue">
      <input
        type="text"
        placeholder="Soru"
        onChange={(e) =>
          setPushQue((soru) => ({
            ...soru,
            soru: e.target.value,
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

      <button
      className="pushQue-btn"
        onClick={() => {
          setSorular((sorular) => [...sorular, pushQue]);
        }}
      >
        {" "}
        Ekle
      </button>
    </div>
  );
}

export default SoruEkle;
