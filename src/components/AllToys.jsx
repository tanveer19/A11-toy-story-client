import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Toy from "./Toy";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://2-19-a11-toy-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://2-19-a11-toy-server.vercel.app/toySearchByTitle/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Toy Story | All Toys </title>
      </Helmet>

      <div className="m-auto w-1/3">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search for Toy Name"
          className="input input-bordered w-fit"
        />
        <button onClick={handleSearch} className="btn ghost mx-2">
          Search
        </button>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>#</th>
                <th>Select</th>
                <th>Toy Image</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {toys.map((toy, index) => (
                <Toy key={toy._id} toy={toy} index={index}></Toy>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
