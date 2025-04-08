import { Card } from "./Card.jsx";
import "./styleCard.css";
import { useState, useEffect } from "react";

export const CardList = () => {
  /*---------------------CARGAR LISTA------------*/
  /*const cargarLista = async () => {
    const respuesta = await fetch(
      "http://localhost:5173/data.json"
    ); 
    const data = await respuesta.json();
    console.log(data);
  }*/
  const jsonLista = [
    {
      id: 1,
      nombre: "Smart TV 42 Sansei Android",
      modelo: "TDS2442FISH",
      precioAnterior: 419999,
      precioActual: 294999,
      descuento: "30% OFF",
      imagen:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUSEBMVFhUXFhUXFxYWFhUXFhUYFhcYFxYSFRUYHSggGB8lHRYXIjEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGzUfICUtLS0tLS0vLS0vLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xABOEAABAwEEBAgHCwoFBQAAAAABAAIRAwQSITEFE0FRBgciU2FxkdEVMlSBk7LTFBYXM1JzdJShovAjNDVCgpKxs8HSJGJyw+ElY2SD8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQACAQQCAgMBAQAAAAAAAAABAhEDEiExBFETQSIyYRRC/9oADAMBAAIRAxEAPwDuKI",
    },
    {
      id: 2,
      nombre: "Smart TV 50 Sansei Android",
      modelo: "TDS2450FISH",
      precioAnterior: 469999,
      precioActual: 329999,
      descuento: "30% OFF",
    },
    {
      id: 3,
      nombre: "Smart TV 55 Sansei Android",
      modelo: "TDS2455FISH",
      precioAnterior: 569999,
      precioActual: 399999,
      descuento: "30% OFF",
    },
    {
      id: 4,
      nombre: "Smart TV 65 Sansei Android",
      modelo: "TDS2465FISH",
      precioAnterior: 699999,
      precioActual: 489999,
      descuento: "30% OFF",
    },
  ];
  const arrayComponentes = jsonLista.map(
    //callBack//
    (elemento) => {
      console.log(elemento);
      return <Card {...elemento} key={elemento.id}></Card>;
    }
  );
  return <>{arrayComponentes};</>; /*debe estar dentro de un div por jerarquía*/
};
