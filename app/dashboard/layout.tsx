import Sidebar from "./components/Sidebar";

export default function DashboardLayout({ children }:{children:any}) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-1">
        {children}
      </main>
    </div>
  );
}