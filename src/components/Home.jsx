import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import ShopToy from "./ShopToy";
import Contact from "./Contact";
import About from "./About";
import News from "./News";
import Drawer from "./Drawer";
import SliderTop from "./SliderTop";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  // useEffect(() => {
  //   Aos.refresh(); // Refresh AOS after rendering the component
  // }, []);

  return (
    <div>
      <Helmet>
        <title>Toy Story | Home</title>
      </Helmet>

      <SliderTop></SliderTop>

      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>

      <Contact></Contact>
      <About></About>
      <News></News>
      {/* <Drawer></Drawer> */}
    </div>
  );
};

export default Home;
