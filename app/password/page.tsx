"use client";
import { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");

  function generatepassword(length: number) {
    const chars: any =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(result);
  }

  async function copyToClipboard() {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      alert("password Copied");
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-zinc-400">
        <div>
          <button
            className="bg-blue-500 border-blue-400 w-full p-2 rounded-lg hover:bg-blue-600 text-white shadow-md"
            onClick={() => generatepassword(12)}
          >
            Generate Password
          </button>
          <p className="font-bold text-3xl text-red-700 py-2"> Password : {password} </p>
          <button 
          className="bg-blue-500 rounded-lg border-blue-600 hover:bg-blue-700 p-2"
          onClick={copyToClipboard}>Copy</button>
        </div>
      </div>
    </>
  );
}
