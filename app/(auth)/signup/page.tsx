"use client";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
  }>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400">
      <div className="w-full max-w-md bg-white rounded p-8 shadow-lg">
        <form className="mt-6 space-y-5">
          <h2 className="text-2xl font-bold text-center">Signup</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
            />

            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
            />
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
            />
            <label
              htmlFor="confirmpassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400"
            />
          </div>
          <button className="rounded-lg bg-blue-500 py-2 font-semibold text-white border w-full transition hover:bg-blue-600 ">
            Signup
          </button>
          <div className="flex justify-between">
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-700 hover:underline"
              >
                Sign in
              </Link>
            </p>
            <p className="text-center text-sm text-gray-600">
              
              <Link
                href="/forgot-password"
                className="font-medium text-blue-700 hover:underline"
              >
                forgot password?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
