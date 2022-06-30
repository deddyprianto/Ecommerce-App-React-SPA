import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTrackedSelector } from "react-tracked";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const useTrackedSelector = createTrackedSelector(useSelector);

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer((prev) => !prev);
  };
  const state = useTrackedSelector();
  const val = state.counter.cart;
  const { modal } = state.appSlice.stateModal;

  return (
    <nav
      className={`bg-white shadow dark:bg-gray-800  fixed top-0 w-full z-50 ${
        modal && "-z-10"
      }`}
    >
      <div className="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <p className="text-2xl font-bold text-gray-700 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              E-Wallets
            </p>
          </NavLink>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="items-center md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3B82F6" : "gray",
                };
              }}
            >
              <p className="my-1 text-sm font-medium  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                Home
              </p>
            </NavLink>
            <NavLink
              to="/shop"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3B82F6" : "gray",
                };
              }}
            >
              <p className="my-1 text-sm font-medium  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                Shop
              </p>
            </NavLink>
            <NavLink
              to="/pet"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3B82F6" : "gray",
                };
              }}
            >
              <p className="my-1 text-sm font-medium  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                Pets
              </p>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3B82F6" : "gray",
                };
              }}
            >
              <p className="my-1 text-sm font-medium  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                Contact
              </p>
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3B82F6" : "gray",
                };
              }}
            >
              <p className="my-1 text-sm font-medium  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                About
              </p>
            </NavLink>
            <NavLink
              to="/faq"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#3B82F6" : "gray",
                };
              }}
            >
              <p className="my-1 text-sm font-medium  transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                FAQ
              </p>
            </NavLink>
          </div>
          <div className="flex justify-center md:block">
            <div
              onClick={toggleDrawer}
              className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="absolute top-0 left-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-rose-500 rounded-full">
                {val.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={drawer}
        overlayOpacity={0.5}
        size={400}
        onClose={toggleDrawer}
        direction="right"
        className="overflow-y-auto overflow-x-hidden"
      >
        {val.length === 0 ? (
          <h1 className="text-red-500 text-center mt-5">
            Keranjang anda kosong
          </h1>
        ) : (
          <>
            <p className="text-2xl font-black leading-10 text-gray-800 pt-3">
              Your Bag
            </p>
            {val.map((item, i) => (
              <div
                key={i}
                className="md:flex items-center mt-14 py-8 border-t border-gray-200"
              >
                <div className="w-1/4">
                  <img
                    src={item.imgSrc}
                    alt="this is your pic"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="md:pl-3 md:w-3/4">
                  <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                    RF293
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-base font-black leading-none text-gray-800">
                      {item.title}
                    </p>
                    <select
                      // onChange={(e) => setstockQty(e.target.value)}
                      className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none"
                    >
                      {[...Array(item.stock).keys()].map((a, i) => (
                        <option key={i} value={a + 1}>
                          {a + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="text-xs leading-3 text-gray-600 pt-2">
                    Qty: {item.qty}
                  </p>
                  <p className="text-xs leading-3 text-gray-600 py-4">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex itemms-center">
                      <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                        Add to favorites
                      </p>
                      <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </Drawer>
    </nav>
  );
};

export default Navbar;
