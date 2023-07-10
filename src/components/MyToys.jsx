import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import Toy from "./Toy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?sellerEmail=${user?.email}`)
      .then((result) => result.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByTitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Toy Story | My Toys </title>
      </Helmet>
      <div className="m-auto w-1/4">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Type seller or Toy Name"
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

export default MyToys;
