import React from "react";

const GridSections = () => {
  return (
    <div>
      <h4 className="text-5xl text-center my-4"> Our Cars </h4>
      <div class="grid grid-cols-3 gap-4 w-1/2 mx-auto">
        <div class="flex justify-center items-center">
          <img src="https://i.ibb.co/grzGwgT/Bugatti.png" alt="car" />
        </div>
        <div class="flex justify-center items-center">
          <img src="https://i.ibb.co/zbNS1CV/Ferrari.png" alt="car" />
        </div>
        <div class="flex justify-center items-center">
          <img src="https://i.ibb.co/5ML8BXv/Lamborghini2.png" alt="car" />
        </div>
        <div class="col-span-2 flex justify-center items-center">
          <img src="/images/car5.png" alt="car" />
        </div>
        <div class="flex justify-center items-center">
          <img src="https://i.ibb.co/JxS1qqQ/nissan.png" alt="car" />
        </div>
        <div class="flex justify-center items-center">
          <img
            src="https://i.ibb.co/0DvCCf6/Truck.png
"
            alt="car"
          />
        </div>
        <div class="col-span-2 flex justify-center items-center">
          <img src="/images/car1.jpg" alt="car" />
        </div>
      </div>
    </div>
  );
};

export default GridSections;
