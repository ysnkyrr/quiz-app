import "./App.css";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import SoruEkle from "./components/SoruEkle";
import Questions from "./components/Questions";

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
        <Link className="nav-link" to="/Sorular">
          Soru Düzenle
        </Link>
      </nav>
      <Routes>
        <Route path="/Sorular" element={<Questions />} />
        <Route path="/SoruEkle" element={<SoruEkle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Quiz />} />
      </Routes>
    </div>
  );
}
export default App;
