import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://2-19-a11-toy-server-tanveer19.vercel.app/alltoys")
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
              {toys?.map((toy) => (
                <tr key={toy._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="mask mask-squircle w-20 h-20">
                        <img src={toy.URL} alt="toy image" />
                      </div>
                    </div>
                  </td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td>{toy.price}</td>
                  <td>{toy.rating}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
