import "./App.css";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import SoruEkle from "./components/SoruEkle";
import Questions from "./components/Questions";
import Change from "./components/Change";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/Sorular/:id" element={<Change />} />
        <Route path="/Sorular" element={<Questions />} />
        <Route path="/SoruEkle" element={<SoruEkle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Quiz />} />
      </Routes>
    </div>
  );
}
export default App;
