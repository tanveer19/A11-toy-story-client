import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div
          className="hero-content flex-col lg:flex-row-reverse border-x-4 border-green-500"
          data-aos="fade-up"
          // data-aos-duration="1200"
          // data-aos-delay="200"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
