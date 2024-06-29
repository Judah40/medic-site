"use client";

// src/components/Header.js
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaHospitalUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" text-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div className="text-2xl font-bold flex items-center text-gray-500">
          <FaHospitalUser className="text-blue-500 text-4xl" /> Vh
        </div>
        <nav className="hidden md:flex space-x-6 md:justify-end items-center">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <div className="relative group">
            <button
              onClick={() => {
                router.push("/Pages/Service");
              }}
              className="hover:text-gray-300"
            >
              Service Offered
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-blue-600 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a
                href="#consultation"
                className="block px-4 py-2 hover:bg-blue-100"
              >
                Consultation
              </a>
              <a
                href="#appointment"
                className="block px-4 py-2 hover:bg-blue-100"
              >
                Appointment
              </a>
              <a
                href="#emergency"
                className="block px-4 py-2 hover:bg-blue-100"
              >
                Emergency Service
              </a>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => {
                router.push("/Pages/Hospital");
              }}
              className="hover:text-gray-300"
            >
              Hospital
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-blue-600 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a href="#name" className="block px-4 py-2 hover:bg-blue-100">
                Name
              </a>
              <a href="#location" className="block px-4 py-2 hover:bg-blue-100">
                Location
              </a>
              <a href="#contacts" className="block px-4 py-2 hover:bg-blue-100">
                Contacts
              </a>
            </div>
          </div>
          <div className="relative group">
            <button
              onClick={() => {
                router.push("/Pages/About");
              }}
              className="hover:text-gray-300"
            >
              About Us
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-blue-600 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a href="#goals" className="block px-4 py-2 hover:bg-blue-100">
                Our Goals
              </a>
              <a
                href="#objectives"
                className="block px-4 py-2 hover:bg-blue-100"
              >
                Objectives
              </a>
            </div>
          </div>
          <a
            href="/Auth/Signin"
            className="hover:text-gray-300 bg-blue-500 w-24 h-10 items-center justify-center flex rounded text-white"
          >
            Sign In
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col  space-y-4 p-5 ">
            <a href="/" className="hover:text-gray-300" onClick={toggleMenu}>
              Home
            </a>
            <div className="relative">
              <button
                className="hover:text-gray-300"
                onClick={() => {
                  router.push("/Pages/Service");
                }}
              >
                Service Offered
              </button>
              <div
                className={`mt-2 w-full bg-white flex flex-col items-center text-blue-600 rounded-lg shadow-lg ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <a
                  href="#consultation"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Consultation
                </a>
                <a
                  href="#appointment"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Appointment
                </a>
                <a
                  href="/About"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Emergency Service
                </a>
              </div>
            </div>
            <div className="relative">
              <button
                className="hover:text-gray-300"
                onClick={() => {
                  router.push("/Pages/Hospital");
                }}
              >
                Hospital
              </button>
              <div
                className={`mt-2  w-full bg-white flex flex-col items-center text-blue-600 rounded-lg shadow-lg ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <a
                  href="#name"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Name
                </a>
                <a
                  href="#location"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Location
                </a>
                <a
                  href="#contacts"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Contacts
                </a>
              </div>
            </div>
            <div className="relative">
              <button
                className="hover:text-gray-300"
                onClick={() => {
                  router.push("/Pages/About");
                }}              >
                About Us
              </button>
              <div
                className={`mt-2 w-full  bg-white flex flex-col items-center  text-blue-600 rounded-lg shadow-lg ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <a
                  href="#goals"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Our Goals
                </a>
                <a
                  href="#objectives"
                  className="block px-4 py-2 hover:bg-blue-100"
                  onClick={toggleMenu}
                >
                  Objectives
                </a>
              </div>
            </div>
            <Link
              href="/Auth/Signin"
              className="hover:text-gray-300 bg-blue-500 w-24 h-10 items-center justify-center flex rounded text-white"
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
