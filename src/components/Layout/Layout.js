import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../store";
import { isLoginChange } from "../../store/actions/questions";
import goto from "../images/uo-logo-white.png";

function Layout({ children }) {
  const navigate = useNavigate();
  const { dispatch, state } = useContext(MainContext);
  const logOut = () => {
    localStorage.removeItem("isLogin");
    isLoginChange(dispatch, false);
    navigate("/login");
  };
  return (
    <div>
      <div className="nav">
        {state.isLogin ? (
          <>
            <a
              className="nav-link"
              target="_blank"
              href="https://www.yasinakyar.com/"
            >
              <img className="uo-logo" src={goto} alt="" />
            </a>
            <Link className="nav-link" to="/">
              Sınav
            </Link>
            <Link className="nav-link" to="/SoruEkle">
              Soru Ekle
            </Link>
            <Link className="nav-link" to="/Sorular">
              Düzenle
            </Link>

            <button onClick={logOut} className="nav-link" to="/login">
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <a
              className="nav-link"
              target="_blank"
              href="https://www.yasinakyar.com/"
            >
              <img className="uo-logo" src={goto} alt="" />
            </a>

            <Link className="nav-link" to="/">
              Sınav
            </Link>
            <Link className="nav-link" to="/login">
              Giriş Yap
            </Link>
          </>
        )}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
