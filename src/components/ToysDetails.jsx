import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ToysDetails = () => {
  const { id } = useParams();
  const toy = useLoaderData();
  console.log(toy);
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
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
