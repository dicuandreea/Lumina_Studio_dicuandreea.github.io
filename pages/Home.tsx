import React from 'react';
import { ArrowRight, Sparkles, Layers, Zap } from 'lucide-react';
import { PageState } from '../types';

interface HomeProps {
  setPage: (page: PageState) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/132/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-serif">
            Transformăm Realitatea în <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Viziune</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10">
            Servicii premium de editare foto, prelucrare digitală și artă conceptuală. 
            Experimentează puterea tehnicilor Liquify, Color Grading și compoziție avansată.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setPage(PageState.SHOP)}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-900/20 flex items-center justify-center gap-2"
            >
              Cumpără Artă <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => setPage(PageState.PORTFOLIO)}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-full transition-all border border-slate-700"
            >
              Vezi Portofoliul
            </button>
          </div>
        </div>
      </div>

      {/* Features / Teaser */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400 mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Retușare Creativă</h3>
              <p className="text-slate-400">Transformăm imagini obișnuite în opere de artă folosind tehnici avansate de manipulare.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center text-pink-400 mb-4">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compoziție Complexă</h3>
              <p className="text-slate-400">Îmbinăm multiple elemente vizuale pentru a crea lumi noi, suprarealiste și captivante.</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Livrare Rapidă</h3>
              <p className="text-slate-400">Proces optimizat pentru a livra proiectele la timp, fără a compromite calitatea artistică.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;