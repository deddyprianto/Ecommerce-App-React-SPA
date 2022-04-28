import React from "react";
import {
  HeartIcon,
  TrashIcon,
  MinusSmIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { useSelector, useDispatch } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import {
  icrementQtyHoodie,
  icrementQtyTshirt,
  increment,
} from "features/root/counterSlice";
const useTrackedSelector = createTrackedSelector(useSelector);

const Card1 = () => {
  const dispatch = useDispatch();
  const state = useTrackedSelector();
  const { value: tshirt } = state.counter.priceTshirt;
  const { value: hoodie } = state.counter.priceHoodie;
  const qtyTshirt = state.counter.qtyTshirt;
  const qtyHoodie = state.counter.qtyHoodie;
  // const { valueTshirt, valueHoodie } = state.counter.count;

  return (
    <div className="w-4/5 lg:w-[60%] rounded-lg shadow-lg bg-white">
      <div className="w-full p-4">
        <h1>Cart (2 Items)</h1>
        <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 grid-rows-3 mt-7">
          {/* image */}
          <div className="w-full">
            <div className="w-4/5 h-36 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src="/img/baju1.jpg" alt="" className="w-20 h-20" />
            </div>
          </div>
          <ul className="col-span-2 flex flex-col justify-evenly">
            <li className="text-gray-800">Blue Denim Desirt</li>
            <li className="text-sm text-gray-500">Shirt Blue</li>
            <li className="text-sm text-gray-500">Color Blue</li>
            <li className="text-sm text-gray-500">Size M</li>
            <li className="flex mt-2 -ml-1">
              <div className="w-full flex ">
                <TrashIcon className="w-5 h-5 text-gray-400" />
                <p className="text-sm text-gray-500">Remove item</p>
              </div>
              <div className="w-full flex">
                <HeartIcon className="w-5 h-5 text-gray-400" />
                <p className="text-sm text-gray-500">Move To Wishlist</p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="flex items-start mt-4 sm:mt-0 justify-center">
              <div className="border flex bg-white text-gray-500 shadow rounded">
                <button
                  className="py-1 px-5 flex items-center justify-center text-xs focus:outline-none"
                  onClick={() => {
                    dispatch(icrementQtyTshirt(qtyTshirt - 1));
                  }}
                >
                  <MinusSmIcon className="h-5 w-5" />
                </button>
                <button className="py-1 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                  {qtyTshirt}
                </button>
                <button
                  className="py-1 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100"
                  onClick={() => {
                    dispatch(icrementQtyTshirt(qtyTshirt + 1));
                  }}
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="w-full h-1/2 mt-2">
              <p className="text-[10px] text-gray-300 text-center">
                (note 1 Piece)
              </p>
            </div>
            <div className="w-full flex justify-end items-end h-[25%]">
              <p>$17.99</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <hr className="w-[96%] h-[2px]" />
      </div>
      <div className="w-full p-4">
        <div className="grid lg:grid-cols-4 lg:grid-rows-1 grid-cols-1 grid-rows-3 mt-7">
          {/* image */}
          <div className="w-full">
            <div className="w-4/5 h-36 bg-gray-200 rounded-lg flex justify-center items-center">
              <img src="/img/baju2.jpg" alt="" className="w-20 h-20" />
            </div>
          </div>
          <ul className="col-span-2 flex flex-col justify-evenly">
            <li className="text-gray-800">Red Hoodie</li>
            <li className="text-sm text-gray-500">Hoodie - Red</li>
            <li className="text-sm text-gray-500">Color Red</li>
            <li className="text-sm text-gray-500">Size M</li>
            <li className="flex mt-2 -ml-1">
              <div className="w-full flex ">
                <TrashIcon className="w-5 h-5 text-gray-400" />
                <p className="text-sm text-gray-500">Remove item</p>
              </div>
              <div className="w-full flex">
                <HeartIcon className="w-5 h-5 text-gray-400" />
                <p className="text-sm text-gray-500">Move To Wishlist</p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="flex items-start mt-4 sm:mt-0 justify-center">
              <div className="border flex bg-white text-gray-500 shadow rounded">
                <button
                  onClick={() => dispatch(icrementQtyHoodie(qtyHoodie - 1))}
                  className="py-1 px-5 flex items-center justify-center text-xs focus:outline-none"
                >
                  <MinusSmIcon className="h-5 w-5" />
                </button>
                <button className="py-1 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                  {qtyHoodie}
                </button>
                <button
                  className="py-1 px-5 flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100"
                  onClick={() => dispatch(icrementQtyHoodie(qtyHoodie + 1))}
                >
                  <PlusIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="w-full flex justify-end items-end h-full">
              <p>$35.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
