import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();

  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">Product Details</h1>
      <p className="mt-5 text-xl">Product ID: {id}</p>
    </div>
  );
};

export default CardDetails;