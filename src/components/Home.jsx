import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      {/* BANNER */}
      <div className="w-full flex justify-center items-center bg-gray-100 h-28 2xl:h-40">
        <h1 className="text-gray-700 text-2xl">Shopping Cart</h1>
      </div>
      {/* CARD */}
      <div className="w-full mt-10 flex flex-col  justify-center items-center  lg:flex-row lg:items-start">
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
};

export default Home;
