import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { Card } from "./components/Card";
import { CardList } from "./components/CardList";
import MiNavegador from "./components/MiNavegador";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MiNavegador />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardlist" element={<CardList />} />
      </Routes>
    </div>
  );
}

export default App;
