import { collection, getDocs } from "firebase/firestore";
import database from "./config/firebase"; // Asegúrate de que la ruta sea correcta

export const TraerLista = async () => {
  try {
    //Paso 1 buscar la colleccion en nuestra DB
    const products_collection_reference = collection(database, "productos");

    //Paso 2 obtener la lista de documentos
    const result = await getDocs(products_collection_reference);

    console.log("Resultado de getDocs:", result);

    //Paso 3 formateamos la respuesta para que sea compatible con nuestra aplicacion
    const product_list_formatted = result.docs.map((document) => {
      console.log("Document:", document);
      console.log("Document data:", document.data());
      return {
        id: document.id,
        ...document.data(), //Esto nos devuelve los campos (ejemplo: precio, img, title)
      };
    });
    return product_list_formatted;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return null;
  }
};

/*export const TraerLista = async () => {
  const respuesta = await fetch(
    "http://localhost:5173/data.json",

    {
      method: "GET" /*no hace falta, es buena practica*/ /*,
    }
  );
  const data = await respuesta.json();
  console.log(data);
  return data.productos; // Asegúrate de que 'productos' es la clave correcta en tu JSON
};*/
/*export const TraerLista = async () => {
    const respuesta = await fetch("http://localhost:5173/data.json");
    if (!respuesta.ok) {
      throw new Error(`HTTP error! status: ${respuesta.status}`);
    }
    const data = await respuesta.json();
    return data;
  };*/

export const getProductById = async ({ product_id }) => {
  const products = await TraerLista();
  return products.find((product) => product.id == product_id);
};
