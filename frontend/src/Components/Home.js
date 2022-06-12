import React from "react";
import Products from "./Products";
import Footer from "./Footer";
import Slider from "../Components/Carousel/Slider";

const Home = () => {
  return (
    <div className="hero">
      <Slider />
      <Products />
      <Footer/>
    </div>
  );
};

export default Home;
