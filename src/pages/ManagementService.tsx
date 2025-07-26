import DashboardLayout from "../components/layouts/Dashboard/DashboardLayout";
import CustomTable from "../components/dashboard/_shared/CustomTable";
import { ServerCog } from "lucide-react";

const columns = [
  { id: "no", label: "No", minWidth: 50 },
  { id: "name", label: "Service Name", minWidth: 150 },
  { id: "category", label: "Category", minWidth: 100 },
  { id: "price", label: "Price", minWidth: 100 },
];

const rows = [
  { no: 1, name: "Website Development", category: "Web", price: "$300" },
  { no: 2, name: "Logo Design", category: "Design", price: "$80" },
];

const ServiceManagement = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-slate-700 flex items-center gap-2 mb-4">
        <ServerCog size={22} className="text-blue-600" /> Service Management
      </h1>
      <CustomTable
        title="Service List"
        columns={columns}
        rows={rows}
        onDetail={(row) => console.log("Detail:", row)}
        onEdit={(row) => console.log("Edit:", row)}
        onDelete={(row) => console.log("Hapus:", row)}
      />
    </DashboardLayout>
  );
};

export default ServiceManagement;
