import React from "react";
import SlideShow from "./SlideShow";
import Product from "./Product";
import Banner from "./Banner";
import Blog from "./Blog";
import Footer from "components/Footer";
import Newsletter from "./NewsLetter";

const Parent = () => {
  return (
    <div className="w-full flex flex-col" mode="top">
      <SlideShow />
      <Banner />
      <Blog />
      <Product />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Parent;
