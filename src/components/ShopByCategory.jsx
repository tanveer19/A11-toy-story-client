import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toys from "./Toys";
import { Helmet } from "react-helmet-async";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  const [activeTab, setActivetab] = useState("sports");

  const handleTabClick = (tabName) => {
    setActivetab(tabName);
  };

  useEffect(() => {
    fetch("https://2-19-a11-toy-server-tanveer19.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Toy Story | Shop By Category </title>
      </Helmet>
      <div className="flex p-4 m-4">
        <div
          onClick={() => handleTabClick("sports")}
          className={` ${
            activeTab == "sports" ? "bg-red-700 text-white mr-2" : ""
          }`}
        >
          Sports Car
        </div>
        <div
          onClick={() => handleTabClick("truck")}
          className={` ${
            activeTab == "truck" ? "bg-red-700 text-white mx-2" : ""
          }`}
        >
          Truck
        </div>
        <div
          onClick={() => handleTabClick("police")}
          className={` ${
            activeTab == "police" ? "bg-red-700 text-white ml-2" : ""
          }`}
        >
          Police Car
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>sports car</Tab>
          <Tab>truck</Tab>
          <Tab>mini police car</Tab>
        </TabList>

        <TabPanel>
          <div>
            {toys.map((toy) => (
              <Toys key={toy._id} toy={toy}></Toys>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {toys.map((toy) => (
              <Toys key={toy._id} toy={toy}></Toys>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {toys.map((toy) => (
              <Toys key={toy._id} toy={toy}></Toys>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
