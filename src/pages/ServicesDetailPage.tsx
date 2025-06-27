import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { Ruler, Settings, PencilRuler, Cpu, HardHat, FlaskConical, ArrowLeft } from "lucide-react";
import logoJava from "../assets/logojava.png";
import { useEffect } from "react";
import Footer from "../components/_shared/footer";
import SEO from "../components/_shared/SEO";

const services = [
    {
        title: "Survey Pengukuran dan Penyelidikan",
        slug: "survey-pengukuran",
        icon: Ruler,
        description: "Layanan profesional pengukuran dan investigasi awal untuk memastikan fondasi proyek Anda kuat dan tepat sasaran.",
        details: `Dalam layanan Survey Pengukuran dan Penyelidikan ini, kami mengombinasikan teknologi pengukuran mutakhir dengan tenaga ahli berpengalaman 
untuk menghasilkan data yang akurat dan terpercaya. Pengukuran dilakukan secara detail untuk membantu Anda dalam perencanaan proyek konstruksi atau infrastruktur 
dengan efisiensi dan risiko minimal. Data yang kami sediakan menjadi fondasi kuat untuk langkah pembangunan Anda selanjutnya.`,
        priceList: [
            { name: "Paket Basic - Pengukuran Standar", price: "Rp-" },
            { name: "Paket Premium - Pengukuran Lengkap + Analisa", price: "Rp-" },
            { name: "Layanan Tambahan - Investigasi Khusus", price: "Rp-" },
        ],
    },
    {
        title: "Perencanaan Sistem",
        slug: "perencanaan-sistem",
        icon: Settings,
        description: "Perencanaan sistem yang terintegrasi dan efisien untuk mendukung kelancaran setiap tahap proyek Anda.",
        details: `Kami menyediakan layanan perencanaan sistem yang komprehensif, mulai dari analisis kebutuhan hingga desain arsitektur sistem yang terstruktur.
Pendekatan kami mengutamakan efisiensi dan skalabilitas, memastikan solusi yang tepat guna dan dapat berkembang sesuai kebutuhan bisnis dan proyek Anda.`,
        priceList: [
            { name: "Analisa Kebutuhan Sistem", price: "Rp-" },
            { name: "Desain Arsitektur Sistem", price: "Rp-" },
            { name: "Konsultasi dan Revisi", price: "Rp-" },
        ],
    },
    {
        title: "Perancangan Teknik",
        slug: "perancangan-teknik",
        icon: PencilRuler,
        description: "Perancangan teknik detail sesuai standar industri untuk hasil proyek yang optimal dan tahan lama.",
        details: `Tim perancang teknik kami berkomitmen memberikan solusi desain yang presisi dan sesuai standar nasional maupun internasional (SNI dan lainnya).
Setiap rancangan dibuat dengan memperhatikan aspek keamanan, fungsionalitas, dan estetika guna memastikan proyek Anda dapat beroperasi optimal dalam jangka panjang.`,
        priceList: [
            { name: "Desain Struktur Dasar", price: "Rp-" },
            { name: "Desain Struktur Lengkap", price: "Rp-" },
            { name: "Konsultasi Teknik", price: "Rp-" },
        ],
    },
    {
        title: "Computerized Data Processing",
        slug: "data-processing",
        icon: Cpu,
        description: "Pengolahan data komputerisasi untuk mempercepat dan meningkatkan akurasi pengambilan keputusan proyek.",
        details: `Layanan pemrosesan data berbasis komputer kami memanfaatkan teknologi terkini untuk mengelola dan mengolah data secara efisien.
Dengan output yang cepat dan akurat, Anda dapat mengambil keputusan strategis dengan percaya diri dan tepat waktu.`,
        priceList: [
            { name: "Pengolahan Data Dasar", price: "Rp-" },
            { name: "Analisis Data Lanjut", price: "Rp-" },
            { name: "Pelaporan Kustom", price: "Rp5.000.000" },
        ],
    },
    {
        title: "Manajemen Konstruksi & Supervisi",
        slug: "manajemen-konstruksi",
        icon: HardHat,
        description: "Manajemen proyek menyeluruh dan supervisi profesional untuk memastikan kualitas dan efisiensi konstruksi.",
        details: `Kami mengelola seluruh aspek konstruksi dari perencanaan, pelaksanaan hingga pengawasan lapangan secara profesional.
Dengan pendekatan terstruktur dan transparan, proyek Anda akan berjalan sesuai jadwal, anggaran, dan standar kualitas yang ditetapkan.`,
        priceList: [
            { name: "Manajemen Proyek Standar", price: "Rp-" },
            { name: "Supervisi Harian", price: "Rp-" },
            { name: "Laporan Progres Bulanan", price: "Rp-" },
        ],
    },
    {
        title: "Analisa Tanah (Laboratorium Tanah)",
        slug: "analisa-tanah",
        icon: FlaskConical,
        description: "Analisa laboratorium tanah yang mendalam untuk mendukung desain pondasi yang aman dan tepat.",
        details: `Layanan analisa tanah kami menggunakan metode laboratorium standar untuk menguji komposisi, kekuatan, dan sifat mekanik tanah.
Hasil analisa yang detail membantu Anda dalam menentukan jenis pondasi terbaik dan menghindari risiko kegagalan struktur di kemudian hari.`,
        priceList: [
            { name: "Analisa Dasar", price: "Rp-" },
            { name: "Analisa Lengkap dengan Laporan", price: "Rp-" },
            { name: "Uji Kekuatan dan Komposisi", price: "Rp-" },
        ],
    },
];

const ServiceDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((item) => item.slug === slug);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const Icon = service.icon;
    const otherServices = services.filter((item) => item.slug !== slug);

    return (

        <div>

            <SEO
                title={`${service.title} - Java Konsul Utama`}
                description={service.description}
                keywords={`${service.title.toLowerCase()}, layanan konsultasi, java konsul utama`}
            />

            <section className="max-w-4xl mx-auto px-6 py-16">

                <div className="flex items-center justify-between mb-20">
                    {/* Logo */}
                    <div>
                        <img src={logoJava} alt="Logo Java" className="w-60 h-auto" />
                    </div>

                    {/* Button kembali */}
                    <button
                        onClick={() => navigate("/services")}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Kembali
                    </button>
                </div>

                <div className="flex items-center space-x-4 mb-8">
                    <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
                        <Icon className="w-10 h-10" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900">{service.title}</h1>
                </div>

                <p className="text-gray-800 text-lg mb-8 font-semibold">{service.description}</p>

                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-justify mb-12">
                    {service.details}
                </div>

                {/* Katalog Harga */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b pb-2">Katalog Harga</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                        {service.priceList.map(({ name, price }, idx) => (
                            <li key={idx} className="flex justify-between border-b py-2">
                                <span>{name}</span>
                                <span className="font-semibold">{price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Katalog Layanan Ringkas */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">Layanan Lainnya</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {otherServices.map(({ slug, title, icon: Icon, description }) => (
                            <Link
                                to={`/services/${slug}`}
                                key={slug}
                                className="flex items-start space-x-4 p-4 border rounded-md hover:shadow-lg transition-shadow bg-white"
                            >
                                <div className="bg-blue-600 text-white p-3 rounded-full shadow-md flex-shrink-0">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                    <p className="text-gray-700">{description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    );
};

export default ServiceDetailPage;
