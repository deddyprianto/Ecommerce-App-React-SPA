import React from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { createTrackedSelector } from "react-tracked";
const useTrackedSelector = createTrackedSelector(useSelector);

const Card2 = () => {
  const state = useTrackedSelector();
  const { value: priceTshirt } = state.counter.priceTshirt;
  const { value: priceHoodie } = state.counter.priceHoodie;
  const qtyTshirt = state.counter.qtyTshirt;
  const qtyHoodie = state.counter.qtyHoodie;
  const priceAllTshirt = qtyTshirt * priceTshirt;
  const priceAllTHoodie = qtyHoodie * priceHoodie;
  const finalPrice = Math.ceil(priceAllTshirt + priceAllTHoodie);
  return (
    <div className="w-4/5 lg:w-[25%] flex flex-col mt-2 lg:mt-0">
      <div className="lg:ml-5 ml-0 rounded-lg shadow-lg  flex flex-col">
        <div className="w-full bg-white rounded-lg shadow-lg">
          <h1 className="text-gray-700 p-2">The Total amount Of</h1>
          <div className=" p-2 text-sm flex justify-between text-gray-400">
            <p>Temporary Amount</p>
            <p>${finalPrice}.00</p>
          </div>
          <div className=" p-2 text-sm flex justify-between text-gray-400">
            <p>Shipping</p>
            <p>Gratis</p>
          </div>
          <div className="w-full flex justify-center">
            <hr className="w-[94%] h-[2px]" />
          </div>
          <div className=" p-2 text-sm flex justify-between">
            <p>
              The Total amount of <br /> (Including VAT)
            </p>
            <p>${finalPrice}.00</p>
          </div>
          <div className="flex justify-center w-full py-5">
            <button className="w-[90%] rounded-lg bg-blue-500 text-sm h-10 text-white">
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <div className="lg:ml-5 ml-0 mt-5 bg-white rounded-lg shadow-lg flex  justify-evenly p-4">
        <p className="text-sm text-gray-400">Add a checkout code (Optional)</p>
        <ChevronDownIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Card2;
