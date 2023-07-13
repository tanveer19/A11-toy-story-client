import React from "react";

const ViewToyModal = ({ show, toy }) => {
  // Destructure the toy data
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

  return (
    <div className={`modal ${show ? "block" : "hidden"}`}>
      <div className="modal-box">
        {/* Modal content */}
        <h2 className="text-lg font-bold">{name}</h2>
        <img src={URL} alt="Toy" className="w-64 mx-auto" />
        <p>
          <span className="font-bold">Seller Name:</span> {sellerName}
        </p>
        <p>
          <span className="font-bold">Seller Email:</span> {sellerEmail}
        </p>
        <p>
          <span className="font-bold">Subcategory:</span> {subCategory}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <p>
          <span className="font-bold">Rating:</span> {rating}
        </p>
        <p>
          <span className="font-bold">Quantity:</span> {quantity}
        </p>
        <p>
          <span className="font-bold">Description:</span> {description}
        </p>
        {/* Add any other desired toy details */}
      </div>
      <label className="modal-backdrop" htmlFor={_id} />
    </div>
  );
};

export default ViewToyModal;
