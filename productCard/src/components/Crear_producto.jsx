import React from "react";

const Crear_producto = () => {
  return (
    <div>
      <h1>Crea tu producto</h1>
      <form>
        <div>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Escribe el titulo..."
            required
          />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Escribe el precio..."
            min={0}
            required
          />
        </div>
        <div>
          <label htmlFor="discount">Descuento (opcional):</label>
          <input
            type="number"
            name="discount"
            id="discount"
            placeholder="Escribe el descuento..."
            max={99}
            required
          />
        </div>
        <div>
          <label htmlFor="img">Seleciona una imagen:</label>
          <input type="file" id="img" name="img" />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Crear_producto;
