import { useParams, useNavigate } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { ArrowLeft, Camera, Cpu, FileText } from 'lucide-react';
import logoJava from "../assets/logojava.png";
import { useEffect } from "react";
import Footer from "../components/_shared/footer";
import SEO from "../components/_shared/SEO";

const DetailPortfolioPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Convert id dari string ke number supaya cocok dengan tipe data id di portfolioData
    const project = portfolioData.find(item => item.id === Number(id));

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold mb-4">Proyek tidak ditemukan</h2>
                <button
                    onClick={() => navigate("/portfolio")}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Kembali ke Portfolio
                </button>
            </div>
        );
    }

    const renderIcon = () => {
        if (project.category === "sipil") return <Camera className="w-6 h-6 text-red-600" />;
        if (project.category === "teknik") return <Cpu className="w-6 h-6 text-blue-600" />;
        if (project.category === "manajemen") return <FileText className="w-6 h-6 text-green-600" />;
        return null;
    };

    return (
        <div>

            <SEO
                title={`${project.title} | Java Konsul Utama Portfolio`}
                description={project.description}
                keywords={`portfolio, proyek, ${project.category}, java konsul utama`}
            />

            <section className="max-w-4xl mx-auto py-12 px-6 bg-white rounded-lg">

                <div className="flex items-center justify-between mb-8">
                    {/* Logo */}
                    <div>
                        <img src={logoJava} alt="Logo Java" className="w-60 h-auto" />
                    </div>

                    <button
                        onClick={() => navigate("/portfolio")}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Kembali
                    </button>
                </div>

                <h1 className={`text-4xl font-bold mb-4 ${project.textColor}`}>{project.title}</h1>

                <div className="mb-6">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                <div className="flex items-center mb-4 space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        {renderIcon()}
                    </div>
                    <span className="text-lg font-semibold text-gray-700 capitalize">{project.category}</span>
                </div>

                <p className="text-gray-700 mb-6">{project.description}</p>

                {/* Detail lengkap */}
                <div className="mb-6 space-y-1">
                    <p><strong>Team:</strong> {project.team}</p>
                    <p><strong>Lokasi:</strong> {project.location}</p>
                    <p><strong>Tanggal:</strong> {project.date}</p>
                    <p><strong>Durasi:</strong> {project.duration}</p>
                    <p><strong>Biaya:</strong> {project.cost}</p>
                </div>

                <p className="text-gray-700 mb-6">{project.fullDescription}</p>
            </section>

            <Footer />
        </div>

    );
};

export default DetailPortfolioPage;
