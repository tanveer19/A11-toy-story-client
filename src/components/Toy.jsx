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
        <ViewToyModal toy={toy}></ViewToyModal>
      </td>
    </tr>
  );
};

export default Toy;
