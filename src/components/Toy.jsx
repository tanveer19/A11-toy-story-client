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
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Toy;
