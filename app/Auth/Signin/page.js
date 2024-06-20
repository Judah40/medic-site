"use client";

import Image from "next/image";
import React from "react";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter();
  return (
    <div className="flex w-full ">
      <div className="flex w-full h-full ">
        <div className="w-6/12  h-[80vh] lg:flex hidden items-center justify-center">
          <Image
            src={"/backgrounds/img.jpg"}
            alt="img"
            width={500}
            height={500}
          />
        </div>
        <div className="lg:w-6/12 w-full h-full flex">
          <div className="flex flex-col  items-center w-full justify-center min-h-[80vh] px-4">
            <h2 className="text-4xl mb-2 font-light lg:text-left w-full lg:w-7/12">
              Welcome Back :)
            </h2>
            <p className="text-center lg:text-left w-full lg:w-7/12 text-gray-600 mb-4">
              To keep connected with us please login with your personal
              information by email address and password
            </p>
            <div className="w-full lg:w-7/12 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center border-b border-gray-300 py-2 mb-4">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2 mb-4">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  type="password"
                  placeholder="Password"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600 mr-2"
                  />
                  Remember Me
                </label>
                <a href="#" className="text-blue-600">
                  Forget Password?
                </a>
              </div>
              <button
                onClick={() => {
                  router.push("/");
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg mb-4 hover:bg-blue-700"
              >
                Login Now
              </button>
              <button className="w-full bg-gray-600 text-white py-2 rounded-lg mb-6 hover:bg-gray-700">
                Create Account
              </button>
              <p className="text-center text-gray-600 mb-4">
                Or you can join with
              </p>
              <div className="flex justify-center space-x-4">
                <FcGoogle className="text-2xl cursor-pointer" />
                <FaFacebook className="text-2xl text-blue-700 cursor-pointer" />
                <FaTwitter className="text-2xl text-blue-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
