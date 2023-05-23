import React from "react";

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
          <button className="btn btn-info my-1">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Toys;
