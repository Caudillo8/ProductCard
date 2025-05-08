import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api.js";
import "../miEstilo/detalle-producto.css";
const DetalleProducto = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { product_id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    //El setTimeout no es necesario
    setTimeout(async () => {
      console.log({ product_id });
      const product_detail_response = await getProductById({ product_id });
      console.log({ product_detail_response });
      if (product_detail_response) {
        setProduct(product_detail_response);
      } else {
        setError("Error al buscar producto");
      }
      setLoading(false);
    }, 0);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div className="container-detalle">
      <h2>Modelo del producto</h2>
      {/*{loading && <span>Cargando...</span>}*/}
      {/*{error && <span>{error}</span>}*/}
      {product && <span>{product.modelo}</span>}
    </div>
  );
};

export default DetalleProducto;
