import React from "react";
import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
  const toysdetails = useLoaderData();
  const { Picture, name, Price, Rating } = toysdetails;
  return <div>{name}</div>;
};

export default ToysDetails;
//
