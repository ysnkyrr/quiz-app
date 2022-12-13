import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../../store";
import { isLoginChange } from "../../store/actions/questions";

function Layout({ children }) {
  const navigate = useNavigate();
  const { dispatch, state } = useContext(MainContext);
  const logOut = () => {
    isLoginChange(dispatch, false);
    navigate("/login");
  };
  return (
    <div>
      <div className="nav">
        {state.isLogin ? (
          <>
            <Link className="nav-link" to="/">
              Quiz
            </Link>
            <Link className="nav-link" to="/SoruEkle">
              Soru Ekle
            </Link>
            <Link className="nav-link" to="/Sorular">
              Düzenle
            </Link>

            <button onClick={logOut} className="nav-link" to="/login">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link className="nav-link" to="/">
              Quiz
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
