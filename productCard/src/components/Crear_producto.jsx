import React from "react";
import { useState } from "react";

const Crear_producto = () => {
  //actualizo state de crear producto
  let EstadoInicialFormulario = {
    nombre: "",
    precioActual: "",
    descuento: "",
    imagen: null,
  };
  //LO GUARDO EN UNA VAR DE ESTADO
  const [estado_current_formulario, setter_formulario] = useState(
    EstadoInicialFormulario
  );
  const handleChange_input = (e) => {
    let campo = e.target.name;
    if (campo === "imagen") {
      setter_formulario((state_previo) => ({
        ...state_previo,
        imagen: e.target.files[0],
      }));
    } else {
      let new_valor = e.target.value;
      setter_formulario((state_previo) => ({
        ...state_previo,
        [campo]: new_valor,
      }));
    }
  };
  console.log(estado_current_formulario);
  return (
    <div>
      <h1>Crea tu producto</h1>
      <form>
        <div>
          <label htmlFor="nombre">Titulo:</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Escribe el titulo..."
            required
            value={estado_current_formulario.nombre} //sincronizo el valor del input con el estado
            onChange={handleChange_input} //actualizo el valor del input
          />
        </div>
        <div>
          <label htmlFor="precioActual">Precio:</label>
          <input
            type="text"
            name="precioActual"
            id="precioActual"
            placeholder="Escribe el precio..."
            min={0}
            required
            value={estado_current_formulario.precioActual}
            onChange={handleChange_input}
          />
        </div>
        <div>
          <label htmlFor="descuento">Descuento (opcional):</label>
          <input
            type="text"
            name="descuento"
            id="descuento"
            placeholder="Escribe el descuento..."
            max={99}
            required
            value={estado_current_formulario.descuento}
            onChange={handleChange_input}
          />
        </div>
        <div>
          <label htmlFor="imagen">Seleciona una imagen:</label>
          <input
            type="file"
            id="imagen"
            name="imagen"
            onChange={handleChange_input}
          />
        </div>
        <button type="submit">CREAR PRODUCTO</button>
      </form>
    </div>
  );
};

export default Crear_producto;
