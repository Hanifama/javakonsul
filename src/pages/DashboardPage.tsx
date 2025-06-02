import React from "react";
import {
  LayoutDashboard,
  Users,
  LogOut,
  PackageCheck,
  Settings,
} from "lucide-react";
import logo from "../assets/logo.png";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md hidden md:flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 p-6">
            <img src={logo} alt="Logo" className="h-10" />
            <h1 className="text-lg font-bold text-blue-600">MyDashboard</h1>
          </div>
          <nav className="mt-6 space-y-2 px-6">
            <NavItem icon={<LayoutDashboard />} label="Dashboard" />
            <NavItem icon={<Users />} label="Users" />
            <NavItem icon={<PackageCheck />} label="Assets" />
            <NavItem icon={<Settings />} label="Settings" />
          </nav>
        </div>
        <div className="px-6 py-4 border-t">
          <button className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium">
            <LogOut size={18} />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="h-9 w-9 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              H
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard title="Total Pengguna" value="1.250" color="blue" />
          <InfoCard title="Asset Aktif" value="320" color="red" />
          <InfoCard title="Permintaan Baru" value="25" color="blue" />
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg w-full transition duration-200">
    <span className="w-5 h-5">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </button>
);

const InfoCard = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: "blue" | "red";
}) => {
  const bg = color === "blue" ? "bg-blue-500" : "bg-red-500";
  const text = color === "blue" ? "text-blue-500" : "text-red-500";
  const ring = color === "blue" ? "ring-blue-200" : "ring-red-200";

  return (
    <div className={`bg-white shadow rounded-xl p-5 border-t-4 ${bg} border-opacity-80`}>
      <p className="text-sm text-white mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-white">{value}</h3>
    </div>
  );
};

export default DashboardPage;
