import React from "react";
import img from "../../assets/head.jpg";

const galleryItems = [
  { src: img, alt: "Foto Head", rowSpan: 3, colSpan: 2 },
  { src: img, alt: "Foto 2", rowSpan: 2, colSpan: 1 },
  { src: img, alt: "Foto 3", rowSpan: 2, colSpan: 1 },
  { src: img, alt: "Foto 4", rowSpan: 3, colSpan: 2 },
  { src: img, alt: "Foto 5", rowSpan: 2, colSpan: 1 },
  { src: img, alt: "Foto 6", rowSpan: 2, colSpan: 1 },
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif font-bold text-gray-800">Keseruan dan Karya Kami</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Melihat lebih dekat proses, kerja keras, dan momen seru yang membentuk perjalanan kami.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{
            gridAutoRows: "100px",
            gridAutoFlow: "dense",
          }}
        >
          {galleryItems.map(({ src, alt, rowSpan, colSpan }, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              style={{
                gridRowEnd: `span ${rowSpan}`,
                gridColumnEnd: `span ${colSpan}`,
              }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg rounded-2xl">
                {alt}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default GallerySection;
