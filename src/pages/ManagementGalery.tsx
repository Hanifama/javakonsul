
import { Image } from "lucide-react";
import DashboardLayout from "../components/layouts/Dashboard/DashboardLayout";
import CustomTable from "../components/dashboard/_shared/CustomTable";

const columns = [
  { id: "no", label: "No", minWidth: 50 },
  { id: "title", label: "Judul", minWidth: 150 },
  { id: "image", label: "Thumbnail", minWidth: 100 },
];

const rows = [
  {
    no: 1,
    title: "Galeri Event 1",
    image: "gambar1.jpg",
  },
  {
    no: 2,
    title: "Galeri Product",
    image: "gambar2.jpg",
  },
];

const GaleryManagement = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-700 flex items-center gap-2 mb-4">
          <Image size={22} className="text-purple-600" /> Manajemen Galeri
        </h1>
        <CustomTable
          title="Daftar Galeri"
          columns={columns}
          rows={rows}
          onDetail={(row) => console.log("Detail:", row)}
          onEdit={(row) => console.log("Edit:", row)}
          onDelete={(row) => console.log("Hapus:", row)} />
      </div>
    </DashboardLayout>
  );
};

export default GaleryManagement;
