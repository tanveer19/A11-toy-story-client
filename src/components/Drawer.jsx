import React from "react";

const Drawer = () => {
  return (
    <div className="text-center my-5">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <img src="/images/car5.png" alt="" />
            </li>
            <li>
              <img src="/images/car6.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
