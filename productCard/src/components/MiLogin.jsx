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
            <label>Nombre</label>
            <input type="text" placeholder="nombre" />
          </div>
          <div className="datoNombre">
            <label>Apellido</label>
            <input type="text" placeholder="apellido" />
          </div>
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label>Email</label>
          <br />
          <input type="email" placeholder="correo electrónico" />
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label>Teléfono</label>
          <br />
          <input type="tel" placeholder="número de teléfono" />
          <br />
          <br />
        </div>
        <div className="datoLargo">
          <label>Password</label>
          <br />
          <div className="password-input">
            <input type="password" placeholder="contraseña" />

            <br />
            <br />
          </div>
          <div className="div datoLargo">
            <label>Confirma pass</label>
            <br />
            <input type="password" placeholder="confirma contraseña" />

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
