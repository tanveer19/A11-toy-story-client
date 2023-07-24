import React, { useEffect, useState } from "react";
import img1 from "/images/car1.jpg";
import img2 from "/images/car2.jpg";
import img3 from "/images/car3.jpg";
import img4 from "/images/car4.jpg";
import img5 from "/images/car5.png";
import img6 from "/images/car6.png";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import ShopToy from "./ShopToy";

const Home = () => {
  useEffect(() => {
    Aos.refresh(); // Refresh AOS after rendering the component
  }, []);

  const [toys, setToys] = useState([]);

  const [activeTab, setActivetab] = useState("sports");

  useEffect(() => {
    fetch(`https://2-19-a11-toy-server.vercel.app/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActivetab(tabName);
  };

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

      <h2 className="text-5xl text-center bg-sky-600 m-3 p-3">Gallery</h2>
      <div class="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl ">
          <div className="w-full">
            <img src={img6} alt="" data-aos="fade-down" />
          </div>
          <div className="w-full">
            <img src={img5} alt="" data-aos="fade-down" />
          </div>
          <div className="w-full">
            <img src={img6} alt="" data-aos="zoom-in" />
          </div>
          <div className="w-full">
            <img src={img5} alt="" data-aos="zoom-in" />
          </div>
          <div className="w-full">
            <img src={img5} alt="" data-aos="fade-up" />
          </div>
          <div className="w-full">
            <img src={img5} alt="" data-aos="fade-up" />
          </div>
        </div>
      </div>

      {/* shop by category */}

      <h2 className="text-5xl text-center bg-sky-600 m-3 p-3">
        Shop by Category
      </h2>

      <div className="flex m-4 justify-evenly ">
        <div
          onClick={() => handleTabClick("sports")}
          className={` ${
            activeTab == "sports" ? "badge badge-neutral text-white mx-3" : ""
          }`}
        >
          Sports Car
        </div>
        <div
          onClick={() => handleTabClick("truck")}
          className={` ${
            activeTab == "truck" ? "badge badge-info text-white mx-3" : ""
          }`}
        >
          Truck
        </div>
        <div
          onClick={() => handleTabClick("police")}
          className={` ${
            activeTab == "police" ? "badge badge-accent text-white mx-3" : ""
          }`}
        >
          Police Car
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
        {toys.map((toy) => (
          <ShopToy key={toy._id} toy={toy}></ShopToy>
        ))}
      </div>
    </div>
  );
};

export default Home;
