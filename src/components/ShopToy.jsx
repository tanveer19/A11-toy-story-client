import React from "react";
import { Link } from "react-router-dom";
// import ViewToyModal from "./ViewToyModal";

const shopToy = ({ toy }) => {
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
      <div className="card w-96 bg-base-100 shadow-xl m-2">
        <figure className="px-10 pt-10 h-48">
          <img src={toy.URL} alt="pic" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Category: {toy.subCategory}</h2>
          <h2 className="card-title">Toy Name: {toy.name}</h2>
          <p className="card-title">Price: {toy.price}</p>
          <p className="card-title">Rating: {toy.rating}</p>
          <Link to={`/toysdetails/${toy._id}`}>
            <button className="btn btn-accent my-2">Details</button>
          </Link>
          {/* modal option*/}
          {/* <label htmlFor={_id} className="btn">
            Details
          </label>
          <ViewToyModal toy={toy}></ViewToyModal> */}
        </div>
      </div>
    </div>
  );
};

export default shopToy;
