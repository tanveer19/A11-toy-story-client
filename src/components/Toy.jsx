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
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={URL} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{sellerName}</div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{description}</td>
    </tr>
  );
};

export default Toy;
