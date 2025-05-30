import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type ConsultationSectionProps = {
  contactLink?: string;
  portfolioLink?: string;
};

const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  contactLink = "/contact",
  portfolioLink = "/portfolio",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section className="relative py-20 px-6 text-center flex justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-8 rounded-2xl shadow-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase"
        >
          Konsultasi Dulu <br />
          <span className="text-red-500">Sepakat Kemudian</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-8 flex flex-col md:flex-row justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={contactLink}
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-lg uppercase tracking-wide transition-all transform"
          >
            Hubungi Kami
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioLink}
            className="border-2 border-white hover:bg-white hover:text-blue-900 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-lg uppercase tracking-wide transition-all transform"
          >
            Portfolio Kami
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConsultationSection;
