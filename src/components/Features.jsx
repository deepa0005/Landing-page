import React from 'react';

const features = [
  { icon: '⚡️', title: 'Fast', text: 'Blazing-fast performance.' },
  { icon: '🔒', title: 'Secure', text: 'Top-tier security built in.' },
  { icon: '🎨', title: 'Customizable', text: 'Tailor to your brand.' },
  { icon: '📱', title: 'Responsive', text: 'Looks great on any device.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-4xl mb-12 text-gray-900">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// This component displays a section of key features with icons, titles, and descriptions.