import React from "react";

const News = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/images/car5.png" className="" />
          <div>
            <h1 className="text-5xl font-bold">Car News!</h1>
            <p className="py-6">
              All toy car news here. All toy car news here. All toy car news
              here. All toy car news here. All toy car news here. All toy car
              news here. All toy car news here.{" "}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
