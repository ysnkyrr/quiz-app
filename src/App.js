import "./App.css";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import { Routes, Route, Link, NavLinck } from "react-router-dom";
import SoruEkle from "./components/SoruEkle";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link className="nav-link" to="/">
          Quiz
        </Link>
        {/* <Link className="nav-link" to="/Login">
          Kendini Kaydet
        </Link> */}
        <Link className="nav-link" to="/SoruEkle">
          Soru Ekle
        </Link>
      </nav>
      <Routes>
        <Route path="/SoruEkle" element={<SoruEkle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Quiz />} />
      </Routes>
    </div>
  );
}
export default App;
