import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiData } from "./ContextApi";

const CardDetails = () => {
  const { id } = useParams();
  const data = useContext(ApiData);

  const product = data.find((item) => item.id == id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h1 className="text-white text-center mt-20 text-3xl">Loading...</h1>;
  }

  const totalPrice = product.price * quantity;

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 to-slate-900 py-20">

      <div className="w-11/12 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 items-center
        bg-linear-to-br from-slate-900 to-slate-800
        p-10 rounded-3xl shadow-2xl relative overflow-hidden">

          {/* glow background */}
          <div className="absolute inset-0 opacity-30 blur-3xl
          bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          {/* IMAGE */}
          <div className="relative z-10 group">

            <div className="overflow-hidden rounded-2xl shadow-xl">

              <img
                src={product.thumbnail}
                className="w-full h-100 object-cover transition duration-700 group-hover:scale-110"
              />

            </div>

          </div>

          {/* PRODUCT INFO */}
          <div className="relative z-10 text-white">

            <h1 className="text-4xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-gray-300 mb-6">
              Premium quality modern product designed for everyday use.
              Stylish, durable and perfect for your lifestyle.
            </p>

            {/* PRICE */}
            <div className="flex items-center gap-5 mb-6">

              <span className="text-3xl font-bold text-blue-400">
                ${product.price}
              </span>

              <span className="line-through text-gray-400">
                ${product.price + 50}
              </span>

            </div>

            {/* QUANTITY */}
            <div className="flex items-center gap-5 mb-8">

              <button
                onClick={decrement}
                className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
              >
                -
              </button>

              <span className="text-xl font-bold">{quantity}</span>

              <button
                onClick={increment}
                className="px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
              >
                +
              </button>

            </div>

            {/* TOTAL PRICE */}
            <h2 className="text-2xl font-bold mb-8 text-purple-400">
              Total Price: ${totalPrice}
            </h2>

            {/* BUTTONS */}
            <div className="flex gap-5">

              <button
                className="px-6 py-3 rounded-xl font-medium
                bg-linear-to-r from-blue-500 to-purple-600
                transition duration-300 hover:scale-110 hover:shadow-xl"
              >
                Add To Cart
              </button>

              <button
                className="px-6 py-3 rounded-xl border border-gray-500
                hover:bg-white hover:text-black transition"
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CardDetails;