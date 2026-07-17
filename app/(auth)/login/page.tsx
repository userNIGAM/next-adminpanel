"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Login() {
    const router = useRouter();
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Practice: only check that both fields have values
    if (formData.email && formData.password) {
      setTimeout(()=>{
        router.replace("/dashboard")
      },1000)
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-300">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5" >
            <label
              htmlFor="email"
              className="block text-sm font-medium font-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="jhon@gmail.com"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium font-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full mt-2 rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="********"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
            <button
            type="submit"
                className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
            >Login
            </button>
            <div className="text-right">
                <Link 
                    href="/forgot-password"
                    className="text-sm text-blue-500 hover:underline"
                >forgot password</Link>
            </div>
            
                <p
                    className="text-center text-sm text-gray-600"
                >
                    Don't have an account?
                    <Link href="/signup"
                        className="ml-1 font-semibold text-blue-600 hover:underline"
                    >create account</Link>
                    </p>
            
          </form>
        </div>
      </div>
    </>
  );
}
