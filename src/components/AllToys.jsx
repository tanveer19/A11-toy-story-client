import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  });
  return (
    <div>
      <Helmet>
        <title>Toy Story | All Toys </title>
      </Helmet>

      <div>
        {toys?.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
