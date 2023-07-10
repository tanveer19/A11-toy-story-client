import React from "react";

const Toy = ({ toy }) => {
  const {
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
    </tr>
  );
};

export default Toy;
