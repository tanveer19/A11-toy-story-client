import React from "react";
import img1 from "/images/car1.jpg";
import img2 from "/images/car2.jpg";
import img3 from "/images/car3.jpg";
import img4 from "/images/car4.jpg";
import img7 from "/images/car5.png";
import img8 from "/images/car6.png";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Toy Story | Home</title>
      </Helmet>
      {/* carousel */}
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={img1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={img2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={img3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={img4} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      {/* gallery */}
      <div className="text-center">
        <h2 className="text-5xl">Gallery</h2>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-2 mx-auto">
        <div className="w-full">
          <img src={img8} alt="" />
        </div>
        <div className="w-full">
          <img src={img7} alt="" />
        </div>
        <div className="w-full">
          <img src={img8} alt="" />
        </div>
        <div className="w-full">
          <img src={img7} alt="" />
        </div>
        <div className="w-full">
          <img src={img8} alt="" />
        </div>
        <div className="w-full">
          <img src={img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
