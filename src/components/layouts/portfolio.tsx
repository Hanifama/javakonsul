import { useState } from "react";
import { Filter } from "lucide-react"; // Mengimpor Filter icon dari lucide-react
import { Camera, Cpu, FileText } from 'lucide-react';

import { Link } from "react-router-dom";
import { portfolioData } from "../../data/portfolioData";

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // State untuk jumlah card yang ditampilkan
  const [visibleItems, setVisibleItems] = useState(3); // Default 3 card

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 3); // Tambah 3 item setiap tombol diklik
  };

  const filteredPortfolio = portfolioData
    .filter(item => filter === "all" || item.category === filter)
    .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-left">
          <h2 className="text-4xl font-bold text-blue-600">Portfolio Kami</h2>
          <p className=" text-gray-600">Berbagai proyek unggulan yang telah kami selesaikan dengan profesionalisme tinggi.</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mt-8 flex justify-end">
          <div className="flex items-end space-x-2">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Cari Proyek..."
              className="px-4 py-2 w-full md:w-90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Filter Button */}
            <button
              className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 transition-all duration-200"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dropdown Filter with "Tirai" Animation */}
        <div
          className={`overflow-hidden bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-500 ease-in-out ${isDropdownOpen
            ? "max-h-[300px] opacity-100 translate-y-0 scale-100"
            : "max-h-0 opacity-0 translate-y-2 scale-95" // Menurunkan posisi sedikit sebelum menutup
            }`}
          style={{ transitionProperty: "max-height, opacity, transform" }}
        >
          <div className="flex justify-between gap-4 p-4">
            {["all", "sipil", "teknik", "manajemen"].map(category => (
              <button
                key={category}
                className={`w-[35%] py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ease-in-out ${filter === category
                  ? "bg-blue-600 text-white"
                  : "text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
                  }`}
                onClick={() => {
                  setFilter(category);
                  setIsDropdownOpen(false);
                }}
              >
                {category === "all"
                  ? "Semua"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          {/* Portfolio Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredPortfolio.slice(0, visibleItems).map((item, index) => (
              <Link
                to={`/portfolio/${item.id}`}
                key={index}
                className="bg-transparent rounded-lg overflow-hidden p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl block"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center justify-start space-x-3 mb-4">
                  {item.category === "sipil" && (
                    <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-red-600" />
                    </span>
                  )}
                  {item.category === "teknik" && (
                    <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-blue-600" />
                    </span>
                  )}
                  {item.category === "manajemen" && (
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-green-600" />
                    </span>
                  )}
                  <span className="text-sm font-semibold text-gray-500">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>

                <h3 className={`text-2xl font-semibold mb-2 ${item.textColor}`}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>

          {filteredPortfolio.length > visibleItems && (
            <div className="relative flex items-center justify-center mt-10">
              {/* Garis horizontal */}
              <div className="absolute w-full h-0.5 bg-gray-300" />

              {/* Tombol di tengah */}
              <button
                onClick={handleLoadMore}
                className="relative group overflow-hidden px-6 py-2 bg-blue-800 text-white rounded-lg transition-all duration-300"
              >
                <span className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                <span className="relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                  Lihat Lainnya
                </span>
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
