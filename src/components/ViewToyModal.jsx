import React from "react";

const ViewToyModal = ({ toy }) => {
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
    <div>
      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <img className="mx-auto" src={toy.URL} alt="toypic" />
          <div className="grid grid-cols-2 justify-items-center">
            <div>
              <h3 className="text-lg font-bold">Toy Name:</h3>
              <h3 className="text-lg font-bold">Seller Name:</h3>
              <h3 className="text-lg font-bold">Seller Email:</h3>
              <h3 className="text-lg font-bold">Price:</h3>
              <h3 className="text-lg font-bold">Rating:</h3>
              <h3 className="text-lg font-bold">Quantity:</h3>
              <h3 className="text-lg font-bold">Description:</h3>
            </div>
            <div>
              <h3 className="text-lg font-bold"> {toy.name}</h3>
              <h3 className="text-lg font-bold">{toy.sellerName}</h3>
              <h3 className="text-lg font-bold">{toy.sellerEmail}</h3>
              <h3 className="text-lg font-bold">{toy.price}</h3>
              <h3 className="text-lg font-bold">{toy.rating}</h3>
              <h3 className="text-lg font-bold">{toy.quantity}</h3>
              <h3 className="text-lg font-bold">{toy.description}</h3>
            </div>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={_id}>
          Close
        </label>
      </div>
    </div>
  );
};

export default ViewToyModal;
