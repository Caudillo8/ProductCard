import React from "react";
import "../miEstilo/contacto.css";

const Contacto = () => {
  return (
    <div className="container-registro">
      <h2>
        <u className="titulo-contacto">REGISTRO DE DATOS PERSONALES.</u>
      </h2>
      <br />
      <form action="" className="formulario-contacto">
        <label htmlFor="nombre">NOMBRE COMPLETO:</label>
        <input
          type="text"
          id="nombre"
          placeholder="escribe tu nombre"
          maxLength={30}
          minLength={3}
          name="nombre"
          required="required"
        />
        <br />
        <label htmlFor="_email">EMAIL: </label>
        <input
          name="email"
          id="_email"
          type="email"
          placeholder="mail@gmail.com"
          required="required"
        />
        <br />
        <label htmlFor="_mensaje">MENSAJE:</label>
        <br />
        <textarea
          type="text"
          name="mensaje"
          id="_mensaje"
          placeholder="escribe tu mensaje..."
          maxLength={120}
          required="required"
          className="textarea-contacto"
        />
        <br />
        <button type="submit" className="boton-formulario-contacto">
          ENVIAR
        </button>
        {/*recordar el prevent*/}
      </form>
    </div>
  );
};
export default Contacto;
