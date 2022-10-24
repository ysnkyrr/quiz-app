import React, { useEffect } from "react";

export default function Login({ loginItem, setLoginItem }) {
  console.log(loginItem.name.length);
  const sing = () => {
    if (loginItem.name.length >= 3 && loginItem.email.length >= 7) {
      setLoginItem((loginItem) => ({...loginItem, isLogin : true}));
    } else {
      alert("Düzgün gir ");
    }
  };

  return (
    <div className="login">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setLoginItem((loginItem) => ({ ...loginItem, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="E-mail"
        onChange={(e) =>
          setLoginItem((loginItem) => ({ ...loginItem, email: e.target.value }))
        }
      />
      <button onKey className="kayit" onClick={sing}>Kayıt Ol</button>
    </div>
  );
}
