import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="gap-8 flex flex-col">
      <div
        style={{
          backgroundImage: `url("/backgrounds/background2.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full flex h-[60vh]"
      >
        <div className="flex w-full h-full flex-col bg-gray-500 bg-opacity-10 lg:items-center  justify-center p-4 md:p-12">
          <h1 className="text-xl font-semibold">
            How does Virtual Hospital Work?
          </h1>
          <h1 className="w-8/12 lg:w-auto">
            Learn how to save up to 80% on your hospital visit
          </h1>
        </div>
      </div>

      {/**why */}
      <div className=" grid grid-cols-1 p-4 space-y-4 lg:grid-cols-2">
        <div className="w-full flex flex-col items-center space-y-2 lg:items-start lg:p-8 lg:justify-center">
          <p className="text-lg font-medium">Why do I need Virtual Hospital</p>
          <p className="text-center font-light lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor nibh et mauris consequat luctus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque magna ex, elementum sed
            sapien non, convallis iaculis elit. Vestibulum elementum elit in
            aliquam vestibulum. Nulla ultricies dui non urna aliquet hendrerit.
            Praesent rutrum est dolor, in congue turpis venenatis in.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.{" "}
          </p>
        </div>

        <div className="flex w-full p-4 justify-center">
          <Image src={"/images/pic5.jpg"} alt="pic5" width={500} height={100} />
        </div>
      </div>

      {/**how */}

      <div className=" flex flex-col p-4 space-y-4 lg:flex-row-reverse">
        <div className="w-full flex flex-col items-center space-y-2 lg:items-start lg:p-8 lg:justify-center">
          <p className="text-lg font-medium">How do I use Virtual Hospital</p>
          <p className="text-center font-light lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            auctor nibh et mauris consequat luctus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Pellentesque magna ex, elementum sed
            sapien non, convallis iaculis elit. Vestibulum elementum elit in
            aliquam vestibulum. Nulla ultricies dui non urna aliquet hendrerit.
            Praesent rutrum est dolor, in congue turpis venenatis in.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.{" "}
          </p>
        </div>

        <div className="flex w-full p-4 justify-center">
          <Image src={"/images/pic6.jpg"} alt="pic6" width={500} height={100} />
        </div>
      </div>

          {/**what */}
          <div className=" grid grid-cols-1 p-4 space-y-4 lg:grid-cols-2">
          <div className="w-full flex flex-col items-center space-y-2 lg:items-start lg:p-8 lg:justify-center">
            <p className="text-lg font-medium">What if I already have insurance and Medicare?</p>
            <p className="text-center font-light lg:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor nibh et mauris consequat luctus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque magna ex, elementum sed
              sapien non, convallis iaculis elit. Vestibulum elementum elit in
              aliquam vestibulum. Nulla ultricies dui non urna aliquet hendrerit.
              Praesent rutrum est dolor, in congue turpis venenatis in.
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas.{" "}
            </p>
          </div>
  
          <div className="flex w-full p-4 justify-center">
            <Image src={"/images/pic7.jpg"} alt="pic7" width={500} height={100} />
          </div>
        </div>
    </div>
  );
};

export default page;
