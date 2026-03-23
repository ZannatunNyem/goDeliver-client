import React from "react";
import loginImage from "../../assets/img/loginMan.webp";
import { useForm } from "react-hook-form";
import GoogleLogIn from "../GoogleLogIn/GoogleLogIn";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signInUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Successly Logged in!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/*..image.. */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-blue-50 p-8">
        <img
          src={loginImage}
          alt="Delivery Man"
          className="max-w-full h-auto rounded-lg "
        />
      </div>

      <div className="flex-1 flex items-center justify-center md:justify-start bg-base-100 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                type="email"
                id="email"
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email?.type === "required" && (
                <p className="text-primary">Email is required</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                id="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password?.type === "required" && (
                <p className="text-primary">Password is required</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-base-200 hover:bg-primary text-white py-2 rounded  transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Don’t have an account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Register
            </a>
            <p>OR</p>
            <GoogleLogIn></GoogleLogIn>
          </p>
        </div>
      </div>
    </div>
  );
}
