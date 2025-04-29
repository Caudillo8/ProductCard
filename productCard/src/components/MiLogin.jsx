import React from "react";
import "../miEstilo/MiLogin.css";
const MiLogin = () => {
  return (
    <div className="container-login">
      <h1>Crea tu cuenta</h1>
      <h4 className="subtitulo">Ingresa tu información en el registro.</h4>
      <form>
        <div className="nombreApellido">
          <div className="datoNombre">
            <label htmlFor="nombre-login">Nombre</label>
            <input id="nombre-login" type="text" placeholder="nombre" />
          </div>
          <div className="datoNombre">
            <label htmlFor="apellido-login">Apellido</label>
            <input id="apellido-login" type="text" placeholder="apellido" />
          </div>
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label htmlFor="email-login">Email</label>
          <br />
          <input
            id="email-login"
            type="email"
            placeholder="correo electrónico"
          />
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label htmlFor="telefono-login">Teléfono</label>
          <br />
          <input
            id="telefono-login"
            type="tel"
            placeholder="número de teléfono"
          />
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label htmlFor="pass-login">Password</label>
          <br />
          <div className="password-input">
            <input id="pass-login" type="password" placeholder="contraseña" />

            <br />
            <br />
          </div>
          <div className="div datoLargo">
            <label htmlFor="confirm-pass-login">Confirma pass</label>
            <br />
            <input
              id="confirm-pass-login"
              type="password"
              placeholder="confirma contraseña"
            />

            <br />
            <br />
          </div>
        </div>
        <input type="submit" value="Registrarse" className="btn" />
      </form>
    </div>
  );
};

export default MiLogin;
