import React, { useContext } from "react";
import { ApiData } from "./ContextApi";

const CardList = () => {
  const data = useContext(ApiData);

  return (
    <div className="w-11/12 mx-auto py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">

        {data?.map((item) => (
          <div
            key={item.id}
            className="group relative w-80 rounded-2xl overflow-hidden 
            bg-linear-to-br from-slate-900 to-slate-800 
            text-white shadow-xl transition duration-500
            hover:shadow-2xl hover:-translate-y-4"
          >

            {/* gradient glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
            bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>

            {/* image */}
            <div className="overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* content */}
            <div className="p-6 relative z-10">

              <h2 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
                {item.title}
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                High quality modern product for your daily needs.
              </p>

              <div className="flex justify-between items-center">

                <span className="text-lg font-bold text-white">
                  ${item.price}
                </span>

                <button
                  className="px-4 py-2 rounded-lg font-medium
                  bg-linear-to-r from-blue-500 to-purple-600
                  transition duration-300
                  hover:scale-110 hover:shadow-lg"
                >
                  Buy Now
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default CardList;