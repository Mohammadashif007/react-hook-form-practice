import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(name, email, password);

  // }

  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {}});

  console.log(errors);

    return (
        <>
            <h2>React hook form</h2>
            <div>
                <form onSubmit={handleSubmit((data) => console.log(data))} className="w-4/12 mx-auto border text-left p-10">
                    <div>
                        <label htmlFor="">Name</label>
                        <br />
                        <input
                            className="border border-slate-950"
                            type="text"
                            {...register("name", {required : 'This field is required'})}
                        ></input>
                        <p>{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <br />
                        <input
                            className="border border-slate-950"
                            type="email"
                            {...register("email", {required: 'This field is require'})}
                        ></input>
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <br />
                        <input
                            className="border border-slate-950"
                            type="password"
                            {...register("password", {required: "This field is required", minLength: {value: 4, message: 'minLength must be 4' }})}
                        ></input>
                        <p>{errors.password?.message}</p>
                    </div>
                    <div>
                      <input className="border-4 mt-5 px-5 py-2 bg-lime-900 text-white" type="submit" value={"Submit"} />
                    </div>
                </form>
            </div>
        </>
    );
}

export default App;
