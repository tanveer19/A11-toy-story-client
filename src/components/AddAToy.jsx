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
    fetch("https://2-19-a11-toy-server-tanveer19.vercel.app/postToy", {
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
        <input
          className="border rounded p-2 my-2"
          placeholder="Sub Category "
          {...register("subCategory")}
        />
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

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input
          className="border rounded p-2 my-2"
          {...register("exampleRequired", { required: true })}
        /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAToy;
