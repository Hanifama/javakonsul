import React, { useEffect, useRef } from "react";
import clientImage from "../../assets/logo.png";
import clientKAI from "../../assets/logoKAI.png";
import clientKabBdg from "../../assets/logoKabBdg.png";
import clientIpkindo from "../../assets/logoIpkindo.png";

interface Client {
  id: number;
  name: string;
  logo: string;
}

const CLIENTS: Client[] = [
  { id: 1, name: "PT. Kereta Api Indonesia", logo: clientKAI },
  { id: 2, name: "Kabupaten Bandung", logo: clientKabBdg },
  { id: 3, name: "Ikatan Nasional Konsultan Indonesia", logo: clientIpkindo },
  { id: 4, name: "Client 4", logo: clientImage },
  { id: 6, name: "Client 5", logo: clientImage },
  { id: 7, name: "Client 6", logo: clientImage },
  { id: 8, name: "Client 7", logo: clientImage },
  { id: 9, name: "Client 8", logo: clientImage },
  { id: 10, name: "Client 9", logo: clientImage },
];

// Fungsi duplikat list untuk seamless scroll
const duplicateList = (list: Client[], times: number): Client[] =>
  Array(times).fill(list).flat();

const Clients: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Scroll width yang dihitung dari 1 set list (karena diduplikat 3x)
    const oneSetWidth = el.scrollWidth / 3;
    let scrollPos = 0;
    let animationId: number;

    const scrollStep = () => {
      scrollPos += scrollSpeed;
      if (scrollPos >= oneSetWidth) scrollPos = 0;
      el.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(scrollStep);
    };

    scrollStep();

    return () => cancelAnimationFrame(animationId);
  }, [scrollSpeed]);

  const extendedClients = duplicateList(CLIENTS, 3);

  return (
    <section className="bg-gray-100 py-12 overflow-hidden relative">
      <div className="overflow-hidden whitespace-nowrap">
        <div
          ref={scrollContainerRef}
          className="flex gap-10"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {extendedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 w-40 h-20 flex justify-center items-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
