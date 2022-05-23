import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/Navbar";

const SharedLayout = ({ login }) => {
  return (
    <div className="grid grid-cols-colCustom w-screen h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
