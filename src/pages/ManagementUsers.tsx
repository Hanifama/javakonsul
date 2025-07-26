import DashboardLayout from "../components/layouts/Dashboard/DashboardLayout";
import CustomTable from "../components/dashboard/_shared/CustomTable";
import { Users } from "lucide-react";

const columns = [
  { id: "no", label: "No", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 150 },
  { id: "email", label: "Email", minWidth: 170 },
  { id: "role", label: "Role", minWidth: 100 },
];

const rows = [
  { no: 1, name: "Haris Fadlilah", email: "haris@mail.com", role: "Admin" },
  { no: 2, name: "Budi Setiawan", email: "budi@mail.com", role: "Editor" },
];

const UserManagement = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-slate-700 flex items-center gap-2 mb-4">
        <Users size={22} className="text-red-600" /> User Management
      </h1>
      <CustomTable
        title="User List"
        columns={columns}
        rows={rows}
        onDetail={(row) => console.log("Detail:", row)}
        onEdit={(row) => console.log("Edit:", row)}
        onDelete={(row) => console.log("Hapus:", row)}
      />
    </DashboardLayout>
  );
};

export default UserManagement;
