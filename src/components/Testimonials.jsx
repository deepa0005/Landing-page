import React from 'react';

const testimonials = [
  { quote: "Amazing product—game changer!", author: "Alice" },
  { quote: "My go-to solution every day.", author: "Bob" },
  { quote: "Incredible support & features.", author: "Carol" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-4xl mb-12 text-gray-900">What People Say</h2>
        <div className="space-y-8 max-w-2xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <p className="italic text-gray-600 mb-4">“{t.quote}”</p>
              <p className="font-semibold text-gray-800">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// This component displays a section of testimonials with quotes and authors.