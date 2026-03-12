import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ApiData } from "./ContextApi";


const CardDetails = () => {

  const { id } = useParams()
  const data = useContext(ApiData)

  const product = data.find((item) => item.id == id)

  if (!product) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">Product Details</h1>

      <h2 className="text-xl mt-5">{product.title}</h2>
      <img src={product.thumbnail} className="mx-auto mt-5" />
      <p className="mt-3">Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>

    </div>
  )
}

export default CardDetails