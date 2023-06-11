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
          {/* The button to open modal */}
          <label htmlFor={toy._id} className="btn">
            view details
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id={toy._id} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Toy Name: {toy.Name}</h3>
              <img className="w-1/2" src={toy.Picture} alt="toy" />
              <p className="py-4">Seller Name: {toy.Seller_Name}</p>
              <p className="py-4">Seller Email: {toy.Seller_Email}</p>
              <p className="py-4">Price: {toy.Price}</p>
              <p className="py-4">Rating: {toy.Rating}</p>
              <p className="py-4">Quantity: {toy.Quantity}</p>
              <p className="py-4">Decription: {toy.Description}</p>
              <div className="modal-action">
                <label htmlFor={toy._id} className="btn">
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
