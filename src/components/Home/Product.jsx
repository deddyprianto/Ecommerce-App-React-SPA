import React from "react";

export default function Product() {
  const dataCol1 = [
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
  ];
  const dataCol2 = [
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
    {
      src: "https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png",
      svg: "http://www.w3.org/2000/svg",
      feature: "Featured",
      name: "IPhone XS",
      time: "4 days ago",
      description:
        "the apple iPhone  XS is available i n 3 colors with 64GB memory. shoot amazing video",
      estimasi: "12 months warranty",
      completeBox: "complete Box",
      area: "bay area,san francisco",
      price: "$350",
    },
  ];
  return (
    <div className="w-full ">
      <div className="mt-[5%] flex flex-col ">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
          Product List Summary
        </h1>
        <div className="mx-auto container py-8 relative">
          <div className="flex flex-wrap items-center lg:justify-between justify-center ">
            {/* Card 1 */}
            {dataCol1.map((item, i) => (
              <div key={i} className="mx-2 w-72 lg:mb-0 mb-8 rounded-lg">
                <div>
                  <img src={item.src} className="w-full h-44" />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns={item.svg}
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">{item.feature}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-xs text-gray-600 pl-5">{item.time}</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {item.description}
                    </p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          {item.estimasi}
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          {item.completeBox}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-indigo-700 text-xs font-semibold">
                        {item.area}
                      </h2>
                      <h3 className="text-indigo-700 text-xl font-semibold">
                        {item.price}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Card 1 Ends */}
          </div>

          <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
            {/* Card 1 */}
            {dataCol2.map((item, i) => (
              <div key={i} className="mx-2 w-72 lg:mb-0 mb-8 rounded-lg">
                <div>
                  <img src={item.src} className="w-full h-44" />
                </div>
                <div className="bg-white">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <svg
                        xmlns={item.svg}
                        className="icon icon-tabler icon-tabler-bookmark"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                      </svg>
                    </div>
                    <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-yellow-500">{item.feature}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-xs text-gray-600 pl-5">{item.time}</p>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      {item.description}
                    </p>
                    <div className="flex mt-4">
                      <div>
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          {item.estimasi}
                        </p>
                      </div>
                      <div className="pl-2">
                        <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                          {item.completeBox}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-indigo-700 text-xs font-semibold">
                        {item.area}
                      </h2>
                      <h3 className="text-indigo-700 text-xl font-semibold">
                        {item.price}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Card 1 Ends */}
          </div>
        </div>
      </div>
    </div>
  );
}
