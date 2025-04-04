import "./styleCard.css";
import { useState } from "react";
/*----------------------------------------- */
export const Card = (props) => {
  /*---------------------CARGAR LISTA------------*/
  const cargarLista = async () => {
    const respuesta = await fetch(
      "http://localhost:5173/data.json"
    ); /*VER MAP PARA QUE TOME LA INFO DEL JSON */
    const data = await respuesta.json();
    console.log(data);
  };
  cargarLista();
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
      <img
        className="imagen"
        src="data:image/jpeg;base64,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A3AtllcbVane6LbUJc+q7EMJzDJzP+bzCAt3LQcwEhBh6SsVO0MuV6dOo3c9ofB3icj0qxoLRjLJRbRpOqOa2YNR5e7HZeOxSkLyFIp1nQms6F7dS4g81nQmsS4lxB7fCXgqbi8uIlXeCXgqLiatBWHBe3grWrTVohdvheawK1q17q0FesCa0KjVLzVIK9aENYKnVJqUHuvG5WLa0VKb6ZvAPa5pLXFrgHCCWuGLTjmFfFFVCigh+D2haFipinZ6YEZvIGsf0veBLisbhjwWoaRpBtUXarJ1VZo5bDuPymna0+aDitjFJVCmg0rgXwhrUqo0bpKfdDfiavjNtFOCQb28Bpzxwxxz3xWm0hMwJ3q6oBERAXhaF6iCm4EuBVIgpuBLgVSIKbgS4FUiCm4EuhVIgpuhLoVSIKboS6FUiCm6EuBVIgpuBLgVSIKboS6FUiDy6Euheog8uhLq9RB5CQvUQeL1EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k="
      ></img>
      <div className="container_titulos">
        <section className="nombre">{props.nombre}</section>
        <section className="modelo">TDS2442FISH</section>
      </div>
      <section className="numeros">
        <s className="precioAnterior">$ 419.999</s>
        <button className="descuento">%30 OFF</button>
        <br />
        <span className="precioActual">$294.999</span>
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
