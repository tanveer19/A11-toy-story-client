import React, { useState } from "react";
import ViewToyModal from "./ViewToyModal";

const Toy = ({ toy }) => {
  const {
    _id,
    URL,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = toy || {};

  const [modalShow, setModalShow] = useState("false");

  const handleToyUpdate = (data) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/updateToy/${data._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount > 0) {
              setControl(!control);
              Swal.fire("Saved!", "", "success");
              setModalShow(false); // Close the modal
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <tr>
      <td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="mask mask-squircle w-20 h-20 flex">
            <img src={URL} alt="toy image" className="self-center" />
          </div>
        </div>
      </td>

      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td>{description}</td>
      <td>
        {/* The button to open modal */}
        <label htmlFor={_id} className="btn">
          Details
        </label>

        <ViewToyModal show={modalShow} toy={toy}></ViewToyModal>
      </td>
    </tr>
  );
};

export default Toy;
