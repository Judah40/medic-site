import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-gray-100 p-6">
        <header
          style={{
            backgroundImage: `url('/backgrounds/service.jpg')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="text-center bg-blue-300 h-[80vh] "
        >
          <div className="flex w-full flex-col h-full bg-gray-500 bg-opacity-50 items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-800">Our Services</h1>
            <p className="mt-4 text-lg text-white font-bold">
              Comprehensive healthcare services to meet your needs
            </p>
          </div>
        </header>

        {/* General Information Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            General Information
          </h2>
          <p className="mt-4 text-gray-700">
            Our hospitals provides a wide range of healthcare services with a
            commitment to quality and patient safety. We have a team of
            dedicated professionals who are here to ensure that you receive the
            best possible care.
          </p>
          <img
            src="/backgrounds/general.jpg"
            alt="Hospital"
            className="mt-4 w-full rounded shadow"
          />
        </section>

        {/* Departments Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/heart.jpg"
                alt="Cardiology"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Cardiology
              </h3>
              <p className="mt-2 text-gray-700">
                Our cardiology department offers comprehensive cardiac care
                services including diagnosis, treatment, and rehabilitation for
                heart conditions.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/neuro.jpg"
                alt="Neurology"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Neurology
              </h3>
              <p className="mt-2 text-gray-700">
                Our neurology department specializes in the diagnosis and
                treatment of disorders affecting the nervous system.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/ortho.jpg"
                alt="Orthopedics"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Orthopedics
              </h3>
              <p className="mt-2 text-gray-700">
                We offer advanced orthopedic care including joint replacement,
                sports medicine, and trauma services.
              </p>
            </div>
            {/* Add more departments as needed */}
          </div>
        </section>

        {/* Specialized Services Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Specialized Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/emergency.jpg"
                alt="Emergency Care"
                className="w-full rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Emergency Care
              </h3>
              <p className="mt-2 text-gray-700">
                Our emergency department is open 24/7 to provide immediate care
                for critical health issues.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/maternity.jpg"
                alt="Maternity Services"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Maternity Services
              </h3>
              <p className="mt-2 text-gray-700">
                We offer comprehensive maternity services including prenatal
                care, labor and delivery, and postnatal care.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/pediatric.jpg"
                alt="Pediatric Care"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Pediatric Care
              </h3>
              <p className="mt-2 text-gray-700">
                Our pediatric department provides specialized care for infants,
                children, and adolescents.
              </p>
            </div>
            {/* Add more specialized services as needed */}
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/radiology.jpg"
                alt="Radiology"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Radiology
              </h3>
              <p className="mt-2 text-gray-700">
                Our radiology department offers advanced imaging services
                including X-rays, CT scans, and MRI.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/lab.jpg"
                alt="Laboratory Services"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Laboratory Services
              </h3>
              <p className="mt-2 text-gray-700">
                We provide a full range of laboratory services to support
                accurate diagnosis and treatment.
              </p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <img
                src="/backgrounds/rehab.jpg"
                alt="Rehabilitation"
                className="w-full h-60 rounded"
              />
              <h3 className="text-xl font-bold text-blue-600 mt-2">
                Rehabilitation
              </h3>
              <p className="mt-2 text-gray-700">
                Our rehabilitation department offers physical, occupational, and
                speech therapy to help patients regain their independence.
              </p>
            </div>
            {/* Add more additional services as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
