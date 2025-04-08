import "./styleCard.css";
import { useState } from "react";
/*----------------------------------------- */
export const Card = ({
  imagen,
  nombre,
  modelo,
  precioAnterior,
  descuento,
  precioActual,
}) => {
  /**------------ESTADOS------------------ */
  const miEstado = Object.freeze({
    COMPRADO: "Gracias por su compra.",
    NO_COMPRADO: "",
  });
  const [mensaje, setMensaje] = useState(miEstado.NO_COMPRADO);
  /**-----------------COMPRAR---------------- */
  const Comprar = () => {
    setMensaje(miEstado.COMPRADO);
  };
  /*------------------*RETURN----------------- */
  return (
    <div className="container">
      <img className="imagen" src={imagen}></img>
      <div className="container_titulos">
        <section className="nombre">{nombre}</section>
        <section className="modelo">{modelo}</section>
      </div>
      <section className="numeros">
        <s className="precioAnterior">$ {precioAnterior}</s>
        <button className="descuento">%{descuento}OFF</button>
        <br />
        <span className="precioActual">${precioActual}</span>
      </section>
      <br />
      <br />

      <button className="comprar" type="button" onClick={Comprar}>
        COMPRAR
      </button>
      <br />
      <br />
      <span className="mensaje">{mensaje}</span>
    </div>
  );
};
