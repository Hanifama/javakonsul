import React from "react";
import {
  LayoutDashboard,
  Users,
  LogOut,
  ServerCog,
  Folder,
  Image,
  Settings,
} from "lucide-react";
import logo from "../assets/logo.png";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm hidden md:flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 p-6 border-b border-gray-200">
            <img src={logo} alt="Logo" className="h-10" />
            <h1 className="text-xl font-extrabold text-blue-700">CMS Dashboard</h1>
          </div>
          <nav className="mt-6 px-4 space-y-2">
            <NavItem icon={<LayoutDashboard />} label="Dashboard" />
            <NavItem icon={<Users />} label="Users" />
            <NavItem icon={<ServerCog />} label="Layanan" />
            <NavItem icon={<Folder />} label="Portfolio" />
            <NavItem icon={<Image />} label="Galeri" />
            <NavItem icon={<Settings />} label="Settings" />
          </nav>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-200">
            <LogOut size={20} />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-sm p-5 flex items-center justify-between border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard CMS</h2>
          <div
            className="relative group"
            title="Profile"
          >
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer select-none">
              H
            </div>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity">
              Haris
            </span>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            title="Total Layanan"
            value="10"
            icon={<ServerCog size={28} className="text-blue-600" />}
            color="blue"
          />
          <InfoCard
            title="Portfolio"
            value="15"
            icon={<Folder size={28} className="text-green-600" />}
            color="green"
          />
          <InfoCard
            title="Galeri"
            value="120"
            icon={<Image size={28} className="text-purple-600" />}
            color="purple"
          />
          <InfoCard
            title="Permintaan Baru"
            value="7"
            icon={<LayoutDashboard size={28} className="text-red-600" />}
            color="red"
          />
        </div>

        {/* Quick Actions */}
        {/* <section className="p-6 mt-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Quick Actions</h3>
          <div className="flex gap-4 flex-wrap">
            <ActionButton icon={<ServerCog size={20} />} label="Tambah Layanan" />
            <ActionButton icon={<Folder size={20} />} label="Tambah Portfolio" />
            <ActionButton icon={<Image size={20} />} label="Tambah Galeri" />
          </div>
        </section> */}
      </main>
    </div>
  );
};

const NavItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button
    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg w-full font-medium transition duration-200"
    type="button"
  >
    <span className="w-6 h-6">{icon}</span>
    <span>{label}</span>
  </button>
);

const InfoCard = ({
  title,
  value,
  color,
  icon,
}: {
  title: string;
  value: string;
  color: "blue" | "red" | "green" | "purple";
  icon: React.ReactNode;
}) => {
  const borderColors: Record<string, string> = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    purple: "border-purple-500",
  };
  const textColors: Record<string, string> = {
    blue: "text-blue-600",
    red: "text-red-600",
    green: "text-green-600",
    purple: "text-purple-600",
  };
  const borderColor = borderColors[color];
  const textColor = textColors[color];

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border-l-4 ${borderColor} p-6 flex items-center space-x-4`}
    >
      <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className={`text-3xl font-bold ${textColor}`}>{value}</h3>
      </div>
    </div>
  );
};

// const ActionButton = ({
//   icon,
//   label,
// }: {
//   icon: React.ReactNode;
//   label: string;
// }) => (
//   <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition duration-200">
//     {icon}
//     <span>{label}</span>
//   </button>
// );

export default DashboardPage;
