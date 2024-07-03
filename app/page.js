"use client";

import Image from "next/image";
import { data, doctors, hospital } from "./Api/DummyData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-10">
      {/**landing */}
      <div
        style={{
          backgroundImage: `url('backgrounds/homeback.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full lg:h-[60dvh] items-center flex flex-col lg:flex-row-reverse lg:justify-center lg:gap-10 xl:gap-40"
      >
        <div className="border-b-2 border-blue-500">
          <Image src={"images/doctorsite.png"} width={350} height={120} alt="doctor"/>
        </div>

        <div className="p-2  w-11/12 md:w-10/12  lg:w-[500px] flex items-center flex-col space-y-4 lg:items-start">
          <h1 className="text-3xl   text-center font-semibold lg:text-left ">
            Get Appointment <br /> Easy And Fast
          </h1>
          <p className="text-center lg:text-left text-gray-500">
            Are you ready to take the first step towards a brighter, healthier
            you? Your journey starts with just one appointment. Whether it&apos;s for
            a health check-up, wellness consultation, or any other service,
            making that appointment is your gateway to a better future.
          </p>
          <button className="w-64 h-12 rounded bg-blue-700 text-white">
            Appointment
          </button>
        </div>
      </div>

      {/**stats */}
      <div className="w-full flex flex-col text-blue-900 items-center  p-10">
        <div className="flex flex-col md:flex-row  space-y-10 md:space-y-0 md:w-11/12 md:justify-between lg:w-8/12 xl:w-6/12">
          <div>
            <p className="text-[50px]">50k+</p>
            <p>Happy Patients</p>
          </div>
          <div>
            <p className="text-[50px]">350k+</p>
            <p>Specialist Dotors</p>
          </div>
          <div>
            <p className="text-[50px]">98%</p>
            <p>Our Success</p>
          </div>
        </div>
      </div>

      {/**section 1 */}
      {/**why */}
      <div className=" grid grid-cols-1 p-8 lg:grid-cols-2 gap-8 bg-blue-300 place-items-center">
        <div className="flex w-full p-4 justify-center lg:justify-end">
          <div className="w-[500px] bg-blue-500 border-b-8 border-white shadow-lg rounded-tr-[1000px] flex justify-center ">
            <Image
              src={"images/pic8.png"}
              alt="pic5"
              width={300}
              height={100}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center space-y-3 lg:items-start  lg:p-8 lg:justify-center">
          <p className=" font-medium text-3xl">Ease of Making an Appointment</p>
          <p className="text-center font-light lg:text-left w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor nibh et mauris consequat luctus.
          </p>
          <Link
            href={""}
            className="w-60 h-10 rounded bg-blue-700 items-center justify-center flex"
          >
            <p className="text-white">Make an Appointment</p>
          </Link>
        </div>
      </div>

      {/**section 1 */}
      <div className="w-full flex flex-col items-center p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   gap-12">
          {data.map((value, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${value.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="w-[400px] lg:w-[340px] h-[340px] xl:w-[300px] xl:h-[300px] rounded-lg "
              >
                <div className="w-full h-full bg-blue-500 flex-col  bg-opacity-50 flex p-4">
                  <div className="rounded-full w-28 bg-white p-2 flex items-center justify-center h-5">
                    <p className="">{value.hospital}</p>
                  </div>

                  <div className="flex-1 flex  items-end p-2 ">
                    <div>
                      <p className="text-lg text-white">{value.sickeness[0]}</p>
                      <p className="font-thin text-white">{value.address}</p>
                    </div>
                    <div className="flex-1 flex justify-end  p-2">
                      <Link href={""} className="w-20 bg-white p-1 rounded-lg">
                        See More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/**section medics */}
      <div className="w-full flex space-y-4 flex-col bg-blue-300 items-center p-8 ">
        <p className="text-3xl font-medium">Top Medical Doctors</p>
        <p className="font-thin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
          nibh et mauris consequat luctus.{" "}
        </p>

        <div className="w-11/12 p-2  h-full  lg:space-x-4  flex flex-col lg:flex-row lg:justify-center items-center gap-4">
          {doctors.map((value, index) => (
            <div
              className="w-80 h-full p-2 rounded bg-white flex flex-col items-center border"
              key={index}
            >
              <img src={value.img} className="w-full h-52" alt="image"/>
              <p className="font-semibold">{value.name}</p>
              <p className="font-thin text-blue-500">{value.specialization}</p>
              <p className="text-xs text-center text-gray-500">{value.about}</p>
              <div className="w-full flex justify-center my-3">
                <Link href={"/Pages/Bookj"} className="p-2 text-white text-sm rounded bg-blue-700">
                  Make Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/**section 1 */}
      <div className="w-full flex flex-col items-center p-2 space-y-4">
      <p className="text-3xl font-medium">Top Hospitals</p>
      <p className="font-thin text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        nibh et mauris consequat luctus.{" "}
      </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   gap-12">
          {hospital.map((value, index) => (
            <div
              key={index}
              className="p-2 w-[400px] lg:w-[340px] xl:w-[300px]  bg-white border flex flex-col justify-between shadow-md rounded-[12px] lg:h-[350px] h-[385px]"
            >
              <Image
                src={value.image}
                alt="hospital"
                width={380}
                height={150}
                style={{ borderRadius: 12 }}
              />
              <p className="font-semibold">{value.name}</p>
              <p className="font-thin text-sm">
                {value.location.split(",")[0]}
              </p>
              <p className="text-sm text-gray-500">from 8:30am - 5:30pm</p>
              <p className="text-sm text-blue-500">
                {value.phoneNumber[0]} {value.phoneNumber[1] ? "/" : ""}{" "}
                {value.phoneNumber[1]}
              </p>
              <div className="w-full flex p-1 flex-1 items-end justify-end">
                <Link
                  href={"/Pages/Book"}
                  className="p-1 rounded items-center flex justify-center w-32 bg-blue-500"
                >
                  <p className="text-sm text-white">Book Now -{">"}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We&apos;d love to hear from you! Please fill out the form below.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-4 border mb-4 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
    </main>
  );
}
