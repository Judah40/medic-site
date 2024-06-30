import Link from 'next/link';
import React from 'react';

export const hospital = [
  {
    name: "Blue Shield",
    location: "1 Waterloo Street,Freetown Sierra Leone",
    phoneNumber: ["+232 76 904707", "+232 33 904707"],
    image: "./Hospitals/blue-host.webp",
  },
  {
    name: "Choithram Memorial Hospital",
    location: "Hill Station,Freetown Sierra Leone",
    phoneNumber: ["+ 232 22 232598", "+ 232 76 980000"],
    image: "./Hospitals/choitram.jpeg",
  },
  {
    name: "Connaught Hospital",
    location: "Wallace Johnson Street,Freetown Sierra Leone",
    phoneNumber: [" + 232 22 222023"],
    image: "./Hospitals/connaught-hospital.jpeg",
  },
  {
    name: "Marie Stopes Health Centre",
    location:
      "10A / 10B Ahmed Drive,Off Sir Samuel Lewis Road,Freetown Sierra Leone",
    phoneNumber: ["+232 76 422810", "+ 232 22 231027"],
    image: "./Hospitals/marie-stopes.jpeg",
  },
];

const HospitalList = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">List of Hospitals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospital.map((hospital, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hospital.image} alt={hospital.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{hospital.name}</h2>
              <p className="text-gray-700 mb-4">{hospital.location}</p>
              <div className="text-gray-600 mb-4">
                {hospital.phoneNumber.map((number, idx) => (
                  <p key={idx}>{number}</p>
                ))}
              </div>
              <Link href={"/Pages/Book"} className="w-full flex items-center justify-center py-2 px-4 bg-blue-700 text-white rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
