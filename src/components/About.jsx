import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-3">About Us</h1>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/car2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="mb-5 text-2xl">
              Welcome to our exclusive toy car shop
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
