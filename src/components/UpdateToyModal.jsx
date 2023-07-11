import React from "react";
import { useForm } from "react-hook-form";

const UpdateToyModal = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { toy, handleToyUpdate, onHide } = props;

  const onSubmit = (data) => {
    handleToyUpdate(data);
  };
  return (
    <div {...props}>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold"> Update Toy</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="text-input"
              {...register("title")}
              placeholder="Title"
              defaultValue={toy?.name}
            />
            <input type="hidden" {...register("_id")} defaultValue={toy?._id} />
            <button type="submit" className="btn">
              Update
            </button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7" onClick={onHide}>
          Close
        </label>
      </div>
    </div>
  );
};

export default UpdateToyModal;
