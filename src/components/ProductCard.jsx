import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow hover:shadow-lg transition m-4 overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-[1.03] transition"
        />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {product.description}
        </p>
        <a
          href={product.link}
          className="text-primary font-medium hover:underline"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
