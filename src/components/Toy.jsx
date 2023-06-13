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
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={URL} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{sellerName}</p>
          <p>{sellerEmail}</p>
          <p>{subCategory}</p>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{quantity}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
