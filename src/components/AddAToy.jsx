import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/postToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    console.log(data);
  };

  return (
    <div>
      <Helmet>
        <title>Toy Story | Add a Toy </title>
      </Helmet>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}

      <form
        className="flex flex-col w-1/3 mx-auto my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="border rounded p-2 my-2"
          placeholder="URL Picture "
          {...register("URL")}
        />
        <input
          className="border rounded p-2 my-2"
          placeholder="Name "
          {...register("name")}
        />
        <input
          className="border rounded p-2 my-2"
          placeholder="Seller Name "
          {...register("sellerName")}
        />
        <input
          className="border rounded p-2 my-2"
          placeholder="Seller Email "
          value={user.email}
          {...register("sellerEmail")}
        />

        <div className="">
          <select
            className={`appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.subCategory ? "border-red-500" : ""
            }`}
            id="subCategory"
            {...register("subCategory", { required: true })}
          >
            <option value="">Select a Sub Category</option>
            <option value="sports">Sports Car</option>
            <option value="truck">Truck</option>
            <option value="police">Police Car</option>
          </select>
        </div>

        <input
          className="border rounded p-2 my-2"
          placeholder="Price "
          {...register("price")}
        />
        <input
          className="border rounded p-2 my-2"
          placeholder="Rating "
          {...register("rating")}
        />
        <input
          className="border rounded p-2 my-2"
          placeholder="Available Quantity "
          {...register("quantity")}
        />
        <input
          className="border rounded p-2 my-2"
          placeholder="Detail Description "
          {...register("description")}
        />

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAToy;
