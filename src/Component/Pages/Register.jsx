import React from "react";
import loginImage from "../../assets/img/registerMan.webp";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import GoogleLogIn from "../GoogleLogIn/GoogleLogIn";

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/*image */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-blue-50 p-8">
        <img
          src={loginImage}
          alt="Delivery Man"
          className="max-w-full h-auto rounded-lg "
        />
      </div>

      {/*form */}
      <div className="flex-1 flex items-center justify-center md:justify-start bg-base-100 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                placeholder="your name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name?.type === "required" && (
                <p className="text-primary">Name is required</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                {...register("email", { required: true })}
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
                {...register("password", { required: true, minLength: 6 })}
                type="password"
                id="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password?.type === "required" && (
                <p className="text-primary">Password is required</p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-primary">
                  Password must be at least 6 characters
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-base-200 text-white py-2 rounded hover:bg-primary transition"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-500">
            Don’t have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Login
            </a>
            <p>OR</p>
            <GoogleLogIn></GoogleLogIn>
          </p>
        </div>
      </div>
    </div>
  );
}
