"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Categories", href: "/dashboard/categories" },
    { name: "Products", href: "/dashboard/products" },
    { name: "Settings", href: "/dashboard/settings" },
    {name: "Logout", href : "/dashboard/logout"}
  ];
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      <nav className="flex flex-col gap-4">
        {links.map((link) => 
        {
          const isActive = link.href === "/dashboard"
          ? pathname ==="/dashboard"
          : pathname.startsWith(link.href);
          return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded ${
                isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-700"
            }`}
          >
            {link.name}
          </Link>
        )
        }
        )}
      </nav>
    </aside>
  );
}
