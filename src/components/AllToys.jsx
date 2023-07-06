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
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Select</th>
                <th>Toy Image</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {toys.map((toy) => (
                <Toy key={toy._id} toy={toy}></Toy>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
