import { Card } from "./Card.jsx";
import "../miEstilo/styleCard.css";
import { useState, useEffect } from "react";
import { TraerLista } from "../api.js";

export const CardList = () => {
  const [pasaManos, setJsonLista] = useState([]);

  useEffect(() => {
    const cargarLista = async () => {
      try {
        const data = await TraerLista();
        if (Array.isArray(data)) {
          setJsonLista(data);
        } else if (data && typeof data === "object") {
          console.log("El objeto no es un array, pero se ha recibido:", data);
          setJsonLista([data]); // Wrap object in an array
        } else {
          console.error("No se pudo cargar la lista o el formato no es válido");
          setJsonLista([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error al cargar la lista:", error);
      }
    };
    cargarLista();
    console.log("RENDERIZADO"); //solo se carga una vez, no cada vez que cambia el estado.
  }, []);

  return (
    <div>
      {pasaManos.map(
        (elemento) => (
          console.log(elemento), (<Card {...elemento} key={elemento.id} />)
        )
      )}
    </div>
  );
};
