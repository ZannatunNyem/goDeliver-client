import React, { useState } from "react";
import loginImage from "../../assets/img/registerMan.webp";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import GoogleLogIn from "../GoogleLogIn/GoogleLogIn";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxios from "../Hooks/useAxios";

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxios();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result);

        const userInfo = {
          email: data.email,
          role: "user",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };
        const userRes = await axiosInstance.post("/users", userInfo);
        console.log(userRes.data);
        //update profile

        const userProfile = {
          displayName: data.name,
          photoURL: profilePic,
        };
        updateUserProfile(userProfile)
          //update profile

          .then(() => {
            console.log("profile pic updated");
          })
          .catch((error) => {
            console.log("here is profile pic ");
          });

        Swal.fire({
          title: "Successly Logged in!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleUplodeImage = async (e) => {
    const image = e.target.files[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    const photoURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_uplode}`;

    const res = await axios.post(photoURL, formData);
    console.log(res.data.data.url);
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

            {/* ..image.. */}

            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Photo
              </label>
              <input
                onChange={handleUplodeImage}
                type="file"
                placeholder="your photo"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
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
