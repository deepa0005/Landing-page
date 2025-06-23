import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Newsletter Section */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-3">NEWSLETTER</h3>
          <p className="text-lg mb-4">Subscribe to our newsletter</p>
          <div className="flex justify-center items-center space-x-3">
            <input
              type="email"
              placeholder="Your email"
              className="py-2 px-4 w-64 bg-gray-800 text-white rounded-lg placeholder-gray-400"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition">
              Send
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us Directly</h3>
            <p className="text-sm">Phone: (888) 528-2011</p>
            <p className="text-sm">Email: info@company.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Our Links</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#home" className="hover:text-red-600 transition">Home</a></li>
              <li><a href="#insights" className="hover:text-red-600 transition">Insights</a></li>
              <li><a href="#careers" className="hover:text-red-600 transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Exhibitor Tools */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Exhibitor Tools</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#exhibitor-login" className="hover:text-red-600 transition">Exhibitor Login</a></li>
              <li><a href="#track-package" className="hover:text-red-600 transition">Track Your Package</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-5 mb-4">
          <a href="https://www.linkedin.com" className="text-gray-400 hover:text-red-600 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-gray-400 hover:text-red-600 transition">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" className="text-gray-400 hover:text-red-600 transition">
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
