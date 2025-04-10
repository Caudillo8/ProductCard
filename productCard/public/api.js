export const TraerLista = async () => {
  const respuesta = await fetch(
    "http://localhost:5173/data.json",

    {
      method: "GET" /*no hace falta, es buena practica*/,
    }
  );
  const data = await respuesta.json();
  console.log(data);
  return data.productos; // Asegúrate de que 'productos' es la clave correcta en tu JSON
};
/*export const TraerLista = async () => {
    const respuesta = await fetch("http://localhost:5173/data.json");
    if (!respuesta.ok) {
      throw new Error(`HTTP error! status: ${respuesta.status}`);
    }
    const data = await respuesta.json();
    return data;
  };*/
