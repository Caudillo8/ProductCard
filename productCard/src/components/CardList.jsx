import { Card } from "./Card.jsx";
import "./styleCard.css";
import { useState, useEffect } from "react";

const CardList = () => {
  /*---------------------CARGAR LISTA------------*/
  const cargarLista = async () => {
    const respuesta = await fetch(
      "http://localhost:5173/data.json"
    ); /*VER MAP PARA QUE TOME LA INFO DEL JSON */
    //FALTARIA USO DE USE EFFECT Y USE STATE PARA QUE SE CARGUE UNA SOLA VEZ
    const data = await respuesta.json();
    console.log(data);
  };

  return;
  cargarLista();
};
