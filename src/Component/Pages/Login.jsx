import React from "react";
import loginImage from "../../assets/img/loginMan.webp";
export default function LoginPage() {
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
      {/*Form */}
      <div className="flex-1 flex items-center justify-center md:justify-start bg-base-100 p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
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
          </p>
        </div>
      </div>
    </div>
  );
}
