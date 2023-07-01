import React from "react";

const shopToy = ({ toy }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl m-2">
        <figure className="px-10 pt-10 h-48">
          <img src={toy.URL} alt="pic" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Category: {toy.subCategory}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default shopToy;
