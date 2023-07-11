import React from "react";
import { useForm } from "react-hook-form";

const UpdateToyModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleToyUpdate } = props;

  const onSubmit = (data) => {
    handleToyUpdate(data);
  };

  return (
    <div {...props}>
      <input type="checkbox" id={props?.toy?._id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Update </h3>
          <form
            className="container text-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="form-input"
              {...register("sellerName")}
              placeholder="Title"
              defaultValue={props?.toy?.sellerName}
            />
            <input
              className="form-input d-none"
              {...register("quantity")}
              placeholder="quantity"
              value={props?.toy?.quantity}
            />

            <input
              className="form-input"
              {...register("name", { required: true })}
              placeholder="Toy Name"
              defaultValue={props?.toy?.name}
            />
            <input
              className="form-input"
              {...register("price", { required: true })}
              placeholder="price"
              defaultValue={props?.toy?.price}
            />
            <select
              className="form-select"
              {...register("subCategory")}
              defaultValue={props?.toy?.subCategory}
            >
              <option value="sports">Sports Car</option>
              <option value="truck">Truck</option>
              <option value="police">Police Car</option>
            </select>

            <input className="btn" value="Update Job" type="submit" />
          </form>
        </div>
        <label className="modal-backdrop" htmlFor={props?.toy?._id} />
      </div>
    </div>
  );
};

export default UpdateToyModal;
