import React from 'react';
import { ShoppingBag, Download, Plus } from 'lucide-react';
import { Artwork } from '../types';

interface ShopProps {
  addToCart: (item: Artwork) => void;
}

const shopItems: Artwork[] = [
  {
    id: 101,
    title: "Preset Pack: Cyberpunk",
    description: "5 preseturi Lightroom pentru un look futurist.",
    imageUrl: "https://picsum.photos/id/134/600/600",
    technique: "Digital Asset",
    price: 49
  },
  {
    id: 102,
    title: "Print: The Lonely Mountain",
    description: "Print de înaltă rezoluție (A2), hârtie Fine Art.",
    imageUrl: "https://picsum.photos/id/136/600/600",
    technique: "Fine Art Print",
    price: 199
  },
  {
    id: 103,
    title: "Preset Pack: Cinematic",
    description: "Tonuri de film pentru fotografiile tale de stradă.",
    imageUrl: "https://picsum.photos/id/149/600/600",
    technique: "Digital Asset",
    price: 39
  },
  {
    id: 104,
    title: "Print: Urban Decay",
    description: "Print canvas, gata de agățat pe perete.",
    imageUrl: "https://picsum.photos/id/155/600/600",
    technique: "Canvas Print",
    price: 249
  },
    {
    id: 105,
    title: "Tutorial: Liquify Masterclass",
    description: "Video curs de 2 ore despre tehnici avansate.",
    imageUrl: "https://picsum.photos/id/160/600/600",
    technique: "Video Course",
    price: 99
  },
  {
    id: 106,
    title: "Print: Ocean Dreams",
    description: "Print metalic lucios, culori vibrante.",
    imageUrl: "https://picsum.photos/id/184/600/600",
    technique: "Metal Print",
    price: 299
  }
];

const Shop: React.FC<ShopProps> = ({ addToCart }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Magazin Online</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Achiziționează printuri de colecție, pachete de preseturi pentru editare sau tutoriale exclusive.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shopItems.map((item) => (
          <div key={item.id} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 flex flex-col h-full hover:border-purple-500/50 transition-all group">
            <div className="relative overflow-hidden h-64">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                {item.technique}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">{item.description}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-700">
                <span className="text-2xl font-bold text-white">{item.price} RON</span>
                <button 
                  onClick={() => addToCart(item)}
                  className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-purple-900/20 active:scale-95"
                >
                  <Plus size={18} /> Adaugă
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;