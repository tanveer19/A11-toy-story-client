import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";
import UpdateToyModal from "./UpdateToyModal";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalShow, setModalShow] = useState("false");
  const [control, setControl] = useState("false");

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys?sellerEmail=${user?.email}`)
      .then((result) => result.json())
      .then((data) => {
        setToys(data);
      });
  }, [user, control]);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearchByTitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };
  // update using modal
  const handleToyUpdate = (data) => {
    fetch(`http://localhost:5000/updateToy/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
        }
      });
  };

  // delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setControl(!control);
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Toy Story | My Toys </title>
      </Helmet>
      <div className="m-auto w-1/3">
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
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {toys.map((toy, index) => (
                <tr key={toy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="mask mask-squircle w-20 h-20 flex">
                        <img
                          src={toy.URL}
                          alt="toy image"
                          className="self-center"
                        />
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

                  <td>
                    {/* The button to open modal */}
                    <label
                      htmlFor={toy?._id}
                      className="btn"
                      onClick={() => setModalShow(true)}
                    >
                      Edit
                    </label>

                    <UpdateToyModal
                      show={modalShow}
                      toy={toy}
                      handleToyUpdate={handleToyUpdate}
                    ></UpdateToyModal>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(toy._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
