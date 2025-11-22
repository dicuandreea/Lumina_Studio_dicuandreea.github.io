import React, { useState } from 'react';
import { Eye, Wand2 } from 'lucide-react';
import { Artwork } from '../types';
import { generateCreativeDescription } from '../services/geminiService';

const portfolioItems: Artwork[] = [
  {
    id: 1,
    title: "Fluiditate Urbană",
    description: "O reinterpretare a arhitecturii moderne.",
    imageUrl: "https://picsum.photos/id/122/800/600",
    technique: "Liquify & Distortion",
    price: 0
  },
  {
    id: 2,
    title: "Melancolie Cromatică",
    description: "Studiu de culoare și atmosferă.",
    imageUrl: "https://picsum.photos/id/106/800/600",
    technique: "Color Grading & Curves",
    price: 0
  },
  {
    id: 3,
    title: "Dublă Expunere",
    description: "Portret contopit cu natura.",
    imageUrl: "https://picsum.photos/id/338/800/600",
    technique: "Layer Blending & Masking",
    price: 0
  },
  {
    id: 4,
    title: "Viteza Luminii",
    description: "Capturarea mișcării într-un cadru static.",
    imageUrl: "https://picsum.photos/id/203/800/600",
    technique: "Motion Blur & Trails",
    price: 0
  },
  {
    id: 5,
    title: "Perspectiva Fracturată",
    description: "O viziune geometrică asupra realității.",
    imageUrl: "https://picsum.photos/id/216/800/600",
    technique: "Perspective Warp & Retouch",
    price: 0
  },
  {
    id: 6,
    title: "Neon Nocturn",
    description: "Luminile orașului într-o notă cyberpunk.",
    imageUrl: "https://picsum.photos/id/136/800/600",
    technique: "Split Toning & Glow",
    price: 0
  }
];

const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [aiDescriptions, setAiDescriptions] = useState<{[key: number]: string}>({});
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleGenerateDescription = async (item: Artwork) => {
    setLoadingId(item.id);
    const desc = await generateCreativeDescription(item.title, item.technique);
    setAiDescriptions(prev => ({...prev, [item.id]: desc}));
    setLoadingId(null);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Portofoliu Lucrări</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          O selecție de imagini procesate folosind tehnici avansate precum Liquify, ajustări cromatice selective și manipulare digitală.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="group relative bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-700 transition-all hover:border-purple-500/50"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Container with CSS Filter effects simulation based on technique */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 
                  ${item.technique.includes('Liquify') ? 'filter contrast-125 hue-rotate-15' : ''}
                  ${item.technique.includes('Color') ? 'filter sepia-[.4] contrast-125' : ''}
                  ${item.technique.includes('Blur') ? 'filter saturate-150' : ''}
                `}
              />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                {item.technique}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4">
                {aiDescriptions[item.id] || item.description}
              </p>
              
              <button
                onClick={() => handleGenerateDescription(item)}
                disabled={loadingId === item.id || !!aiDescriptions[item.id]}
                className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 text-purple-300 hover:text-purple-200 disabled:opacity-50"
              >
                 {loadingId === item.id ? (
                   <span className="animate-pulse">Generare AI...</span>
                 ) : (
                   <>
                    <Wand2 size={16} />
                    {aiDescriptions[item.id] ? "Descriere Generată" : "Generare Descriere AI"}
                   </>
                 )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;