import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ShopToy from "./ShopToy";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  const [activeTab, setActivetab] = useState("sports");

  useEffect(() => {
    fetch(
      `https://2-19-a11-toy-server-tanveer19.vercel.app/alltoys/${activeTab}`
    )
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActivetab(tabName);
  };

  return (
    <div>
      <Helmet>
        <title>Toy Story | Shop By Category </title>
      </Helmet>

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

      <div className="grid grid-cols-3">
        {toys.map((toy) => (
          <ShopToy key={toy._id} toy={toy}></ShopToy>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
