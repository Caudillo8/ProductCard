import "./styleCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
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
        <s className="precioAnterior"> {precioAnterior}</s>
        <button className="descuento">{descuento}</button>
        <br />
        <span className="precioActual">{precioActual}</span>
      </section>
      <br />
      <br />

      <button className="comprar" type="button" onClick={Comprar}>
        COMPRAR
      </button>
      <Link to={`/api/${id}`}>Ver detalle</Link>
      <br />
      <br />
      <span className="mensaje">{mensaje}</span>
    </div>
  );
};
