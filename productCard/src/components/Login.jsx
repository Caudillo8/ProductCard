import React from "react";
import "../miEstilo/contacto.css";

const Login = () => {
  return (
    <div className="container-registro">
      <h2>
        <u className="titulo-contacto">REGISTRO DE DATOS PERSONALES.</u>
      </h2>
      <br />
      <form action="" className="formulario-contacto">
        <label htmlFor="_email">EMAIL: </label>
        <input
          name="email"
          id="_email"
          type="email"
          placeholder="mail@gmail.com"
          required="required"
        />
        <br />
        <label htmlFor="password">PASS:</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="escribe tu contraseña..."
          maxLength={10}
          required="required"
          className="textarea-contacto"
        />
        <br />
        <button type="submit" className="boton-formulario-contacto">
          INGRESAR
        </button>
        {/*recordar el prevent*/}
      </form>
    </div>
  );
};

export default Login;
