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
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
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
              {...register("_id")}
              value={props?.toy?._id}
            />

            <input
              className="form-input"
              {...register("name", { required: true })}
              placeholder="Salary"
              defaultValue={props?.toy?.name}
            />
            <input
              className="form-input"
              {...register("price", { required: true })}
              placeholder="Vacancy"
              defaultValue={props?.toy?.price}
            />
            <select
              className="form-select"
              {...register("subCategory")}
              defaultValue={props?.toy?.subCategory}
            >
              <option value="Engineering">Engineering</option>
              <option value="Editor">Editor</option>
              <option value="Writer">Writer</option>
              <option value="Developer">Developer</option>
            </select>
            <select className="form-select" {...register("status")}>
              <option value="remote">Remote</option>
              <option value="offline">Offline</option>
            </select>
            <input
              className="form-input"
              {...register("URL")}
              placeholder="URL link"
              type="url"
              defaultValue={props?.toy?.URL}
            />
            <input
              className="form-input"
              {...register("rating")}
              placeholder="Deadline"
              type="date"
              defaultValue={props?.toy?.rating}
            />
            <input className="btn" value="Update Job" type="submit" />
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7" />
      </div>
    </div>
  );
};

export default UpdateToyModal;
