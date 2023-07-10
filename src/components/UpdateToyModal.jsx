import React from "react";
import { useForm } from "react-hook-form";

const UpdateToyModal = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { handleJobUpdate } = props;
  //   console.log(handleJobUpdate);
  return <div></div>;
};

export default UpdateToyModal;
