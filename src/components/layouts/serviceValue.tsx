import { Briefcase, CheckCircle, Award } from "lucide-react";

interface Value {
  icon: React.ElementType; // Menggunakan komponen, bukan JSX langsung
  title: string;
  description: string;
}

const companyValues: Value[] = [
  {
    icon: Briefcase,
    title: "Berpengalaman & Terpercaya",
    description:
      "Dengan pengalaman bertahun-tahun, kami telah menangani berbagai proyek dari skala kecil hingga besar.",
  },
  {
    icon: Award,
    title: "Kualitas Tanpa Kompromi",
    description:
      "Setiap layanan kami dirancang dengan standar kualitas tinggi dan dikerjakan secara profesional.",
  },
  {
    icon: CheckCircle,
    title: "Kepuasan Anda Prioritas Kami",
    description:
      "Kami selalu mengutamakan kebutuhan klien dengan layanan yang cepat dan transparan.",
  },
];

// ✅ Komponen Reusable untuk Card
const ValueCard: React.FC<Value> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-center space-x-4 bg-white p-6 shadow-lg rounded-lg">
      <Icon className="w-14 h-14 text-blue-500" />
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// ✅ Komponen Utama
const ServicesValues: React.FC = () => {
  return (
    <section className="relative py-10 -mt-40 z-10">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {companyValues.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </section>
  );
};

export default ServicesValues;
