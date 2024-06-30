"use client";

import React, { useState } from "react";
import { LuCalendarClock } from "react-icons/lu";
import { FaPhone, FaBriefcaseMedical } from "react-icons/fa6";
import { medicalfields, supscription } from "@/app/Api/DummyData";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setStep(1)
  };
  const [book, setBook] = useState(false);
  const [step, setStep] = useState(0);
  return (
    <div>
      {/**modal  */}
      {book && (
        <div className="fixed p-4  flex w-full h-screen bg-gray-500 bg-opacity-80">
          {step === 0 ? (
            <div className="w-11/12 md:w-8/12 lg:w-6/12 h-[600px] mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="dob"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="contactNumber"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>

                  <button
                    onClick={() => {
                      setBook(false);
                    }}
                    className="text-red-500 w-full items-center underline flex flex-col"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="w-11/12 md:w-8/12 lg:w-6/12 md:h-[600px] mx-auto bg-white p-8 rounded-lg shadow-lg items-center flex flex-col justify-center">
              <p className="text-xl font-semibold">Subscription</p>
              <div className="grid grid-cols-1 md:grid-cols-3 justify-between w-11/12 place-items-center  gap-4">
                {supscription.map((value, index) => (
                  <div
                    key={index}
                    className="w-11/12 border  flex flex-col items-center p-4"
                  >
                    <p className="text-xl font-semibold">{value.duration}</p>
                    <p className="font-thin"> {value.price}</p>
                    <button
                      onClick={() => {
                        alert("successfully booked");
                        setBook(false);
                      }}
                      className="bg-blue-500 hover:bg-blue-300 text-white  w-40 h-10"
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {/**header  */}
      <div
        style={{
          backgroundImage: `url('/backgrounds/connaught.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex w-full h-[80vh] "
      >
        <div className="w-full h-full flex bg-gray-500 bg-opacity-50 flex-col ">
          {/**text -section */}
          <div className="w-full flex h-[67vh] items-center justify-center flex-col space-y-2">
            <p className="text-3xl text-center font-semibold text-white">
              Providing <br /> Compassionate and Advanced Care
            </p>

            <hr className="w-11/12 flex lg:w-6/12" />

            <p className="text-lg text-white font-light">ClOSER TO HOME</p>

            <button className="text-white p-3 bg-orange-500 rounded text-xs">
              LEARN MORE
            </button>
          </div>
          <div className="flex-1  flex">
            <div className="w-6/12 bg-blue-500 flex items-center justify-center space-x-4">
              <LuCalendarClock className="text-white text-[30px] lg:text-[40px]" />
              <div>
                <p className="font-semibold text-white lg:text-xl">
                  Our Schedules
                </p>
                <p className="text-xs text-white font-light lg:text-base">
                  Infant:Mon - Fri
                </p>
                <p className="text-xs text-white font-light lg:text-base">
                  Adult:Mon - Wed
                </p>
              </div>
            </div>
            <div className="w-6/12 bg-orange-500 items-center justify-center flex space-x-2">
              <FaPhone className="text-white text-[30px]" />
              <div>
                <p className="font-semibold text-white lg:text-lg">
                  Call 078-232-242
                </p>
                <p className="text-xs text-white font-light lg:text-base">
                  Email: email@email.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**About */}
      <div className="p-8 lg:p-16  flex flex-col space-y-4 lg:space-y-0 lg:flex-row">
        <div className=" flex w-full  -500 flex-col items-center  lg:justify-center lg:items-start space-y-2">
          <p className="text-3xl font-semibold text-orange-500">About Us</p>
          <p className="text-lg text-blue-500">connaught Hospital</p>
          <p className="text-gray-500 font-light text-center lg:text-left">
            Connaught Hospital is the largest government hospital in Sierra
            Leone. It is the country`&apos;`s main referral hospital for complex
            surgical and medical cases. It is also part of the University of
            Sierra Leone Teaching Hospitals Complex. As such, its main mission
            consists of medical care, training and research. Connaught Hospital
            has an admission capacity of approximately 350 beds. In Sierra
            Leone, it is the hospital with the highest density of specialized
            and subspecialized doctors in various disciplines.
          </p>
          <div className="flex  flex-col space-y-3 lg:space-y-0 lg:space-x-4 lg:flex-row">
            <button
              onClick={() => {
                setBook(true);
              }}
              className="p-3 text-white bg-blue-700 items-center justify-center"
            >
              MAKE APPOINTMENT
            </button>
            <button className="p-3 text-white bg-orange-500 items-center justify-center">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="w-full   flex items-center justify-center p-4">
          <img src="/images/connaught-image.jpg" className="w-80 h-80" />
        </div>
      </div>

      {/**Services */}
      <div className="p-8 lg:p-12 flex flex-col space-y-4 ">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="hidden md:block">
            <hr className="w-60 h-[3px] lg:w-96  bg-orange-500 " />
          </div>
          <p className="text-xl font-semibold text-center text-blue-500">
            Some of Our Top Services
          </p>
          <div className="hidden md:block">
            <hr className="w-60 h-[3px] bg-orange-500 lg:w-96" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:grid-cols-4">
          {medicalfields.map((values, index) => (
            <div
              key={index}
              className="flex border-r-4 h-16 border border-r-blue-500 "
            >
              <div className="bg-blue-500 h-full w-14 flex items-center justify-center">
                <FaBriefcaseMedical className="text-white text-xl" />
              </div>
              <div className="text-blue-700 flex-1 flex items-center justify-center">
                {values.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/**special doctor */}
      <div className="flex w-full items-center p-20 bg-gray-500 justify-center">
        <div className="w-11/12 p-4 bg-white lg:p-12 space-y-2  items-center flex flex-col md:flex-row">
          <Image
            src="/images/salone_doc.png"
            width={500}
            height={100}
            alt="doct_pic"
          />

          <div className="space-y-2 flex flex-col">
            <p className="text-2xl text-blue-500 font-semibold">
              Dr. Randy J Metzger, DPM
            </p>
            <p className="text-sm font-thin">
              CONNAUGHT, SIERRA LEONE BOARD OF PEDIATRIC CERTIFIED
            </p>
            <hr className="bg-orange-500 h-1" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              accumsan mauris sed nisi tempor tincidunt. Duis pretium, turpis
              nec fermentum sollicitudin, ex turpis tempus ligula, quis molestie
              purus sapien tempor justo. Fusce leo turpis, rutrum at imperdiet
              ut, semper pulvinar libero. Donec blandit non libero ac rhoncus.
              Integer bibendum dui nec rutrum dignissim. Suspendisse nec
              eleifend turpis. Nullam quam massa, tincidunt id mattis in,
              dignissim eget felis. Sed id dolor suscipit purus rhoncus bibendum
              at ac augue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
