import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import Toy from "./Toy";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?sellerEmail=${user?.email}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Toy Story | My Toys </title>
      </Helmet>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>View Details</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {/* {toys?.map((toy) => (
                <tr key={toy._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={toy.URL} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy.sellerName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>{toy.description}</td>
                </tr>
              ))} */}

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
