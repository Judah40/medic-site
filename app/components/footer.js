'use client'

// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
        <div>
          <h3 className="text-2xl font-bold mb-5">Contact Us</h3>
          <p className="mb-3">1234 Dental St, Smile City, SC 12345</p>
          <p className="mb-3">Email: contact@sierradentals.com</p>
          <p className="mb-3">Phone: +1 (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-5">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li className="mb-2"><a href="#services" className="hover:text-gray-300">Services Offered</a></li>
            <li className="mb-2"><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li className="mb-2"><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-5">Follow Us</h3>
          <div className="flex space-x-5">
            <a href="https://www.facebook.com" className="text-3xl hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" className="text-3xl hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="text-3xl hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" className="text-3xl hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>© {new Date().getFullYear()} Sierra Virtual. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
