import CustomTable from "../components/dashboard/_shared/CustomTable";
import InfoCard from "../components/dashboard/_shared/InfoCard";
import DashboardLayout from "../components/layouts/Dashboard/DashboardLayout";
import {
  ServerCog,
  Folder,
  Image,
  Users,
} from "lucide-react";

const columns = [
  { id: "no", label: "No", minWidth: 50 },
  { id: "name", label: "Nama", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 100 },
];

const rows = [
  { no: 1, name: "Haris Fadlilah", email: "haris@mail.com", role: "Admin" },
  { no: 2, name: "Budi Setiawan", email: "budi@mail.com", role: "Editor" },
  { no: 3, name: "Rina Kartika", email: "rina@mail.com", role: "Viewer" },
  // Tambah data dummy lainnya
];

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <InfoCard
          title="Total Layanan"
          value="10"
          color="blue"
          icon={<ServerCog size={24} />}
        />
        <InfoCard
          title="Portfolio"
          value="15"
          color="green"
          icon={<Folder size={24} />}
        />
        <InfoCard
          title="Galeri"
          value="120"
          color="purple"
          icon={<Image size={24} />}
        />
        <InfoCard
          title="Users"
          value="3"
          color="red"
          icon={<Users size={24} />}
        />
      </div>

      <CustomTable
        title="Daftar Pengguna"
        columns={columns}
        rows={rows}
      />
    </DashboardLayout>
  );
};

export default DashboardPage;
