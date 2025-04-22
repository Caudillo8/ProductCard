import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { Card } from "./components/Card";
import { CardList } from "./components/CardList";
import MiNavegador from "./components/MiNavegador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/DetalleProducto";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MiNavegador />} />

        <Route path="/cardlist" element={<CardList />} />
        <Route path="/api/:product_id" element={<DetalleProducto />} />
      </Routes>
      <MiNavegador />
    </div>
  );
}

export default App;
