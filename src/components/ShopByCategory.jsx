import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toys from "./Toys";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://2-19-a11-toy-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
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
  );
};

export default ShopByCategory;
