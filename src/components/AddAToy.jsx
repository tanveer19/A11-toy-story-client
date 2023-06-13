import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const AddAToy = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
          defaultValue="test"
          {...register("example")}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="border rounded p-2 my-2"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAToy;
