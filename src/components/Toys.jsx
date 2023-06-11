import React from "react";
import { Link } from "react-router-dom";

const Toys = ({ toy }) => {
  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-1/2" src={toy.Picture} alt="toy" />
        </figure>
        <div className="flex flex-col justify-center">
          <h2 className="card-title">Name: {toy.Name}</h2>
          <p>Price: {toy.Price}</p>
          <p>Rating: {toy.Rating}</p>
          <Link to={`/toysdetails/${toy.id}`}>
            <button className="btn btn-info my-2">View Recipe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toys;
