import React from "react";
import "../miEstilo/navegador.css";
import { NavLink } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";

const MiNavegador = () => {
  return (
    <div className="container_nav">
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/CardList">PRODUCTOS</NavLink>
      <NavLink to="/Contacto">CONTACTO</NavLink>
      <NavLink to="/MiLogin">REGISTRO</NavLink>
      <NavLink to="/crear_producto">CREAR PRODUCTO</NavLink>
    </div>
  );
};

export default MiNavegador;
