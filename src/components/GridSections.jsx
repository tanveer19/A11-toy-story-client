import React from "react";

const GridSections = () => {
  return (
    <div>
      <h4 className="text-5xl text-center my-4"> Our Cars </h4>
      <div class="grid grid-cols-3 gap-4 w-1/2 mx-auto">
        <div class="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScy7n9TVq1QCC5ijgtoh-xRLrghQNZEMZGxA&usqp=CAU"
            alt=""
          />
        </div>
        <div class="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8XqOV8-AQ0GAp2PY5p6Iz1Vj7Bc4U7vEug&usqp=CAU"
            alt=""
          />
        </div>
        <div class="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1595641416278-c4469e0a22d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div class="col-span-2 flex justify-center items-center">
          <img src="/images/car5.png" alt="" />
        </div>
        <div class="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1616850508698-8cb0c576d5ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRveSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </div>
        <div class="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovS-T2atHiYAhu5XNSHltbfljilzri4DeCw&usqp=CAU"
            alt=""
          />
        </div>
        <div class="col-span-2 flex justify-center items-center">
          <img src="/images/car1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GridSections;
