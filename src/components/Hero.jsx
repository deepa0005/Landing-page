// src/components/Hero.jsx
import React from 'react';
import { hero } from '../data/content';
import heroImage from '../assets/heroImg.jpg';
import backgroundimg1 from '../assets/backgroundimg1.jpg'; // add your background image here

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center"
      // style={{ backgroundImage: `url(${backgroundimg1})` }}
    >
      {/* Background gradient + shapes */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-600 to-red-500 mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full opacity-30 filter blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 filter blur-4xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center py-24 px-4 md:px-0">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white leading-tight drop-shadow-lg">
            Think Big. Act Bold.<span className="text-yellow-300">Grow </span>Fast.
          </h1>
          <p className="mt-6 text-white/90 max-w-md mx-auto lg:mx-0 text-lg">
          We empower businesses through strategic consulting, digital innovation, and marketing that delivers real-world impact.We empower businesses through strategic consulting, digital innovation, and marketing that delivers real-world impact.
          </p>
          <a
            href="#learn"
            className="mt-8 inline-block bg-yellow-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition"
          >
            Learn More
          </a>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-70 md:w-80 lg:w-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="block w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,100 1080,0 1440,100 L1440,00 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
