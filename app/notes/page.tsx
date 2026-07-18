"use client";

import { useState } from "react";

export default function NotesPage() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotes((prev) => [...prev, text]);
    setText("");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-zinc-800">
        <div className="w-full max-w-md p-8 shadow-lg bg-gray-300">
          <h2 className="text-black font-bold text-3xl text-center">Notes</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              className="border w-full p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-sm"
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="w-full bg-green-700 hover:bg-green-800 my-5 p-4"
              type="submit"
            >
              Submit
            </button>
          </form>
          <div>
            <h2>Notes Listed</h2>
            {notes.map((note, index) => (
              <div key={index}>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
