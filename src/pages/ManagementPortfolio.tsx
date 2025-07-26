import DashboardLayout from "../components/layouts/Dashboard/DashboardLayout";
import CustomTable from "../components/dashboard/_shared/CustomTable";
import { Folder } from "lucide-react";

const columns = [
  { id: "no", label: "No", minWidth: 50 },
  { id: "project", label: "Project Name", minWidth: 150 },
  { id: "client", label: "Client", minWidth: 100 },
  { id: "year", label: "Year", minWidth: 80 },
];

const rows = [
  { no: 1, project: "Online Store Website", client: "PT. Maju Sejahtera", year: "2023" },
  { no: 2, project: "Company Profile", client: "CV. Andalan", year: "2022" },
];

const PortfolioManagement = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold text-slate-700 flex items-center gap-2 mb-4">
        <Folder size={22} className="text-green-600" /> Portfolio Management
      </h1>
      <CustomTable
        title="Portfolio List"
        columns={columns}
        rows={rows}
        onDetail={(row) => console.log("Detail:", row)}
        onEdit={(row) => console.log("Edit:", row)}
        onDelete={(row) => console.log("Hapus:", row)}
      />
    </DashboardLayout>
  );
};

export default PortfolioManagement;
