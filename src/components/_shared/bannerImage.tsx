import React from "react";

interface BannerProps {
  imageUrl: string;
  altText?: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, altText = "Banner Image" }) => {
  return (
    <section className="relative w-full flex items-center justify-center p-10">
      <div className="relative w-full max-w-7xl h-auto overflow-hidden rounded-2xl shadow-xl">
        <img src={imageUrl} alt={altText} className="w-full h-auto object-contain" />
      </div>
    </section>
  );
};

export default Banner;
