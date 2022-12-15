import React, { useState, useEffect, useContext } from "react";
import SoruEkle from "./SoruEkle";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";

import { MainContext } from "../store";
import { isLoginChange } from "../store/actions/questions";

export default function Login() {
  const { dispatch, state } = useContext(MainContext);
  const [loginItem, setLoginItem] = useState({
    isLogin: false,
  });
  const navigate = useNavigate();
  const loginAd = {
    username: "admin",
    password: "admin123",
  };
  useEffect(() => {
    if (state.isLogin) {
      navigate("/SoruEkle");
    }
  }, []);
  const sing = () => {
    if (
      loginItem.password === loginAd.password &&
      loginItem.name === loginAd.username
    ) {
      localStorage.setItem("isLogin", true)
      isLoginChange(dispatch, true);
      navigate("/SoruEkle");
    } else {
      alert("Düzgün gir ");
    }
  };

  const pushQuestion = () => {
    {
      <SoruEkle />;
    }
  };

  return (
    <Layout>
      <div className="login">
        <p className="login-i">
          Aşağıdaki alana sahip olduğunuz kullanıcı adı ve şifreyi girerek
          uygulama içerisinde değişiklik yapabilirsiniz
        </p>
        <input
          className="password-c"
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setLoginItem((loginItem) => ({
              ...loginItem,
              name: e.target.value,
            }))
          }
        />
        <input
          className="password-c"
          onKeyDown={(e) => e.keyCode === 13 && sing(e)}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setLoginItem((loginItem) => ({
              ...loginItem,
              password: e.target.value,
            }))
          }
        />
        <button onKey className="kayit" onClick={sing}>
          Giriş Yap
        </button>
      </div>
    </Layout>
  );
}
