import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import { useState } from "react";

function App() {
  const [history, setHistory] = useState([]);
  console.log(history, 'historyyy')
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage setHistory={setHistory}/>} />
        <Route exact path="/history" element={<HistoryPage history={history} setHistory={setHistory}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
