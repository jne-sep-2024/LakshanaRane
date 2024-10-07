import { useForm } from "react-hook-form";
import "./App.css";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data",data);
    console.log("erros:",errors);
  };

  //just like e.target.value
  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>React-hook-Form</h1>
      {/* //this input will be resigtered with key:exampleRequired */}

      <input defaultValue="test" {...register("example")} />

      {/* //this input will be resigtered with key:exampleRequired */}
      <input {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
