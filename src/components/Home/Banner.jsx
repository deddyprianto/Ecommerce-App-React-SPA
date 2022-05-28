import React from "react";

const Banner = ({ text }) => {
  return (
    <div className="w-full">
      <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col mt-20 ">
        <div className="flex justify-between w-full bg-gray-50 items-stretch flex-row  shadow-lg">
          <div className="flex items-center bg-gray-800 justify-center">
            <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">
              50% OFF
            </p>
          </div>
          <div className="flex justify-center items-start  flex-col xl:w-[70%] md:w-5/12 md:py-0 ">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                Ambil Sebelum Kehabisan
              </p>
            </div>
            <div className="xl:mt-4 mt-2">
              <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
                Furniture that looks modern and is comfortable as well. Avail
                the 50% offer now.
              </p>
            </div>
          </div>
          <div className="hidden md:block h-44 md:h-60 xl:h-72 w-[20%] relative">
            <img
              className="h-full w-full absolute object-cover "
              src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png"
              alt="pexels-dmitry-zvolskiy-2082090-1"
            />
          </div>
        </div>
        <div className="md:hidden mt-6 w-full">
          <img
            src="https://i.ibb.co/xGZ4hRm/pexels-dmitry-zvolskiy-2082090-1.png"
            alt="pexels-dmitry-zvolskiy-2082090-1"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
