import { Ruler, Settings, PencilRuler, Cpu, HardHat, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Survey Pengukuran dan Penyelidikan",
    slug: "survey-pengukuran",
    icon: Ruler,
    color: "from-blue-500 to-blue-300",
    description: "Layanan profesional untuk pengukuran dan investigasi awal proyek konstruksi maupun infrastruktur.",
  },
  {
    title: "Perencanaan Sistem",
    slug: "perencanaan-sistem",
    icon: Settings,
    color: "from-purple-500 to-purple-300",
    description: "Kami membantu merancang sistem yang efisien dan terintegrasi untuk kebutuhan proyek Anda.",
  },
  {
    title: "Perancangan Teknik",
    slug: "perancangan-teknik",
    icon: PencilRuler,
    color: "from-green-500 to-green-300",
    description: "Solusi perancangan teknis yang matang dan presisi sesuai dengan standar industri.",
  },
  {
    title: "Computerized Data Processing",
    slug: "data-processing",
    icon: Cpu,
    color: "from-yellow-500 to-yellow-300",
    description: "Pemrosesan data berbasis komputer untuk akurasi dan efisiensi tinggi dalam pengolahan informasi.",
  },
  {
    title: "Manajemen Konstruksi & Supervisi",
    slug: "manajemen-konstruksi",
    icon: HardHat,
    color: "from-red-500 to-red-300",
    description: "Kami mengelola dan mengawasi proyek dengan pendekatan profesional dan berstandar tinggi.",
  },
  {
    title: "Analisa Tanah (Laboratorium Tanah)",
    slug: "analisa-tanah",
    icon: FlaskConical,
    color: "from-teal-500 to-teal-300",
    description: "Layanan laboratorium untuk menganalisa karakteristik tanah secara menyeluruh dan ilmiah.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Layanan Kami</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          PT Java Konsul Utama menyediakan berbagai layanan teknis dan profesional yang menunjang keberhasilan proyek Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition group overflow-hidden`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 bg-gradient-to-br ${service.color} p-4 rounded-full text-white`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`} // penyesuaian di sini
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
