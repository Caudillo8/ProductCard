import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { Card } from "./components/Card";
import { CardList } from "./components/CardList";
import MiNavegador from "./components/MiNavegador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/DetalleProducto";
import Contacto from "./components/Contacto";
import MiLogin from "./components/MiLogin";
import Crear_producto from "./components/crear_producto";
function App() {
  return (
    <div className="App">
      <Routes>
        {/*todo deben tener export by default*/}
        <Route path="/" element={<MiNavegador />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/cardlist" element={<CardList />} />
        <Route path="/MiLogin" element={<MiLogin />} />
        <Route path="/api/:product_id" element={<DetalleProducto />} />
        <Route path="/Crear_producto" element={<Crear_producto />} />
      </Routes>
      <MiNavegador />
    </div>
  );
}

export default App;
