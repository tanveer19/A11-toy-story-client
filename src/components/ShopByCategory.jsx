import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toys from "./Toys";
import { Helmet } from "react-helmet-async";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>Toy Story | Shop By Category </title>
      </Helmet>

      <Tabs>
        <TabList>
          <Tab>sports car</Tab>
          <Tab>truck</Tab>
          <Tab>mini police car</Tab>
        </TabList>

        <TabPanel>
          <div>
            {toys.map((toy) => (
              <Toys key={toy.id} toy={toy}></Toys>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {toys.map((toy) => (
              <Toys key={toy.id} toy={toy}></Toys>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            {toys.map((toy) => (
              <Toys key={toy.id} toy={toy}></Toys>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
