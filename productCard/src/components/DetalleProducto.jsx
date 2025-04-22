import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "productCard/public/api.js";

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
    }, 2000);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
};

export default DetalleProducto;
