import React from "react";

export default function Card({ name, renderExtraProp }) {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 p-6 transition-all transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-500 hover:rotate-1 group relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="relative overflow-hidden rounded-lg">
        <img
          className="w-full h-48 object-cover mb-4 transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:rotate-3d group-hover:brightness-125"
          src="https://i.pinimg.com/736x/9c/39/cd/9c39cd9fce66e667eb00343c32dc4cec.jpg"
          alt={name}
        />
      </div>

      <h3 className="text-lg font-semibold text-yellow-400 mb-2 transition-all duration-300 ease-in-out transform group-hover:scale-105">
        {name}
      </h3>
      {renderExtraProp && (
        <div className="mt-4 text-gray-300 text-sm transition-all duration-300 ease-in-out group-hover:text-yellow-400">
          {renderExtraProp}
        </div>
      )}
    </div>
  );
}
