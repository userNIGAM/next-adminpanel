import Link from "next/link";
export default function Logout() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-600">
        <div>
          <button className="bg-red-700 hover:bg-red-800 border py-2 px-4 text-white">
            <Link href={"/"}>Logout</Link>
          </button>
        </div>
      </div>
    </>
  );
}
