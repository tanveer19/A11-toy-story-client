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
          {/* The button to open modal */}
          <label htmlFor="my_modal_6" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_6" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <img className="w-1/2" src={toy.Picture} alt="toy" />
              <p className="py-4">This modal works with a hidden checkbox!</p>
              <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">
                  Close!
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys;
