import { Menu } from "lucide-react";

const Navbar = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button onClick={onOpen} className="md:hidden text-gray-600">
          <Menu size={24} />
        </button>
        <h2 className="text-xl md:text-2xl font-medium text-slate-800 tracking-wide">
          Dashboard CMS
        </h2>
      </div>
      <div className="relative group" title="Profile">
        <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer ring-2 ring-blue-300 select-none">
          H
        </div>
        <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity drop-shadow-md">
          Haris
        </span>
      </div>
    </header>
  );
};

export default Navbar;
