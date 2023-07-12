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
    <div>
      <input type="checkbox" id={props?.toy?._id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-center m-3">Update Toy</h3>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(handleToyUpdate)}
          >
            {errors.exampleRequired && <span>This field is required</span>}

            <span className="text-2xl">Seller Name: </span>

            <input
              className="form-input"
              {...register("sellerName")}
              placeholder="Title"
              defaultValue={props?.toy?.sellerName}
            />

            <span className="text-2xl">Toy Name: </span>

            <input
              className="form-input"
              {...register("name", { required: true })}
              placeholder="Toy Name"
              defaultValue={props?.toy?.name}
            />

            <span className="text-2xl">Price : </span>

            <input
              className="form-input"
              {...register("price")}
              placeholder="price"
              defaultValue={props?.toy?.price}
            />
            <span className="text-2xl">Rating : </span>

            <input
              className="form-input"
              {...register("rating")}
              placeholder="rating"
              type="number"
              defaultValue={props?.toy?.rating}
            />

            <span className="text-2xl">Quantity : </span>

            <input
              className="form-input"
              {...register("quantity")}
              placeholder="quantity"
              defaultValue={props?.toy?.quantity}
            />

            <span className="text-2xl">description : </span>

            <input
              className="form-input"
              {...register("description")}
              placeholder="description"
              defaultValue={props?.toy?.description}
            />

            <span className="text-2xl"> URL: </span>

            <input
              className="text-input"
              {...register("URL")}
              placeholder="URL link"
              type="url"
              defaultValue={props?.toy?.URL}
            />

            <input
              className="text-input hidden"
              {...register("_id")}
              value={props?.toy?._id}
            />
            <span className="text-2xl">Subcategory : </span>

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
