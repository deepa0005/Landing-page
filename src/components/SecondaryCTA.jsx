import React from 'react';

export default function SecondaryCTA() {
  return (
    <section className="py-16 bg-primary text-black text-center">
      <h2 className="font-display text-3xl mb-4">
        Ready to get started?
      </h2>
      <p className="mb-6 max-w-xl mx-auto">
        Join hundreds of happy customers and elevate your business today.
      </p>
      <a
        href="/signup"
        className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-full shadow hover:bg-white/90 transition"
      >
        Sign Up Now
      </a>
    </section>
  );
}
// This component displays a secondary call-to-action section with a title, description, and a sign-up button.