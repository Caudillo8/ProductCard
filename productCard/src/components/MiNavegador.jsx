import React from "react";
import "./navegador.css";
import { NavLink } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";

const MiNavegador = () => {
  return (
    <div className="container">
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/CardList">LISTA</NavLink>
    </div>
  );
};

export default MiNavegador;
