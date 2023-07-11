import React from "react";
import { useForm } from "react-hook-form";

const UpdateToyModal = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { handleToyUpdate } = props;
  //   console.log(handleToyUpdate);
  return (
    <div {...props}>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold"> Update Toy</h3>
          <input
            className="text-input"
            {...register("title")}
            placeholder="title"
            defaultValue={props?.toy.name}
          />
          <input
            className="text-input d-none"
            {...register("_id")}
            value={props?.toy?._id}
          />
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default UpdateToyModal;
