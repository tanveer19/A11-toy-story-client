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
    <div>
      {/* Put this part before </body> tag */}

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{props.toy.sellerName}</h3>
          <p className="py-4">{props.toy.name}</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default UpdateToyModal;
