import Footer from "components/Footer";
import React from "react";
import Banner from "./Banner";
import Blog from "./Blog";
import NewsLetter from "./NewsLetter";
import Product from "./Product";
import SlideShow from "./SlideShow";
const Home = () => {
  return (
    <div className="mt-[10%]">
      <SlideShow />
      <Banner />
      <Blog />
      <Product />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
