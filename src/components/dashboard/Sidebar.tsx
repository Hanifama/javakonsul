import {
    LayoutDashboard,
    Users,
    ServerCog,
    Folder,
    Image,
    Settings,
    LogOut,
    X,
} from "lucide-react";
import logo from "../../assets/logojava.png";
import NavItem from "./NavItem";


const Sidebar = ({
    onClose,
    isSidebarOpen,
}: {
    onClose: () => void;
    isSidebarOpen: boolean;
}) => (
    <>
        <aside
            className={`fixed z-40 top-0 left-0 h-full w-64 bg-white border-r border-gray-100 shadow-md transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div className="flex flex-col justify-between h-full rounded-r-3xl">
                <div>
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <img src={logo} alt="Logo" className="h-10" />
                        <button onClick={onClose} className="md:hidden text-gray-500">
                            <X size={24} />
                        </button>
                    </div>
                    
                    <nav className="mt-4 px-4 space-y-1">
                        <NavItem to="/dashboard" icon={<LayoutDashboard />} label="Dashboard" />
                        <NavItem to="/dashboard/layanan" icon={<ServerCog />} label="Layanan" />
                        <NavItem to="/dashboard/portfolio" icon={<Folder />} label="Portfolio" />
                        <NavItem to="/dashboard/galeri" icon={<Image />} label="Galeri" />
                        <NavItem to="/dashboard/users" icon={<Users />} label="Users" />
                        <NavItem to="/dashboard/settings" icon={<Settings />} label="Settings" />
                    </nav>

                </div>
                <div className="px-6 py-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-rose-500 hover:text-rose-600 font-medium transition-colors duration-200">
                        <LogOut size={20} />
                        Keluar
                    </button>
                </div>
            </div>
        </aside>

        {isSidebarOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                onClick={onClose}
            />
        )}
    </>
);

export default Sidebar;
