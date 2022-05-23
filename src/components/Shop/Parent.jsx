import React from "react";
import Shop from "./Shop";
import Shop2 from "./Shop2";

const ParentComponents = () => {
  return (
    <div className="w-full flex flex-col">
      <Shop />
      <Shop2 />
    </div>
  );
};

export default ParentComponents;
