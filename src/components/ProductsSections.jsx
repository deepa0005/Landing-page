import React from 'react';
import { products } from '../data/content';
import ProductCard from './ProductCard';

export default function ProductsSections() {
  return (
    <section id="products" className="py-16 bg-gray-50">
           <div className="container mx-auto text-center">
        <h2 className="font-display text-4xl mb-12 text-gray-900">Our Products</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
