import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Helmet } from "react-helmet-async";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  const [activeTab, setActivetab] = useState("sports");

  useEffect(() => {
    fetch("https://2-19-a11-toy-server-tanveer19.vercel.app/toys")
      .then((res) => res.json())
      .then((result) => setToys(result));
  }, []);

  const result = toys?.filter((toy) => toy.status == activeTab);
  console.log(result);

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
    </div>
  );
};

export default ShopByCategory;
