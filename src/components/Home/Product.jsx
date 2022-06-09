import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import CurrencyFormat from "react-currency-format";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useProducts } from "customHook/useProducts";

const Product = ({ scrollPosition }) => {
  const { dataResponse, isLoading, isError } = useProducts("productsHome");

  return (
    <div className="w-full ">
      <div className="mt-[5%] flex flex-col ">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
          Product List Summary
        </h1>
        <div className="mx-auto container py-8 relative">
          <div className="flex flex-wrap items-center lg:justify-between justify-center ">
            {isLoading ? (
              <p className="text-center">Loading...</p>
            ) : isError ? (
              <p className="text-center text-red-500">
                Erorr {isError.message}
              </p>
            ) : (
              dataResponse?.map((item, i) => (
                <div key={i} className="mx-2 w-72 lg:mb-0 mb-8 rounded-lg mt-2">
                  <div>
                    <LazyLoadImage
                      effect="blur"
                      alt="products"
                      height="h-44"
                      src={item.imgSrc}
                      width="w-full"
                      placeholderSrc="/img/cart.jpg"
                      scrollPosition={scrollPosition}
                    />
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
                        <p className="text-xs text-yellow-500">
                          {item.feature}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-xs text-gray-600 pl-5">
                          {item.time}
                        </p>
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
                          <CurrencyFormat
                            value={item.price}
                            displayType="text"
                            thousandSeparator={true}
                            prefix="Rp"
                          />
                        </h3>
                      </div>
                    </div>
                    <div className="rounded flex justify-center items-center w-full bg-blue-500 shadow-lg cursor-pointer text-gray-100 p-2">
                      <p>Add To Chart</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default trackWindowScroll(Product);
