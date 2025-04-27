import React from "react";
import "../miEstilo/navegador.css";
import { NavLink } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";

const MiNavegador = () => {
  return (
    <div className="container_nav">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/CardList">LISTA</NavLink>
      <NavLink to="/Contacto">CONTACTO</NavLink>
      <NavLink to="/MiLogin">Login</NavLink>
    </div>
  );
};

export default MiNavegador;
