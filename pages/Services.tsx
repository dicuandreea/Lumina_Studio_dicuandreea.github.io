import React from 'react';
import { Edit3, Image, PenTool, Camera } from 'lucide-react';
import { Service, PageState } from '../types';

interface ServicesProps {
  setPage: (page: PageState) => void;
}

const servicesList: Service[] = [
  {
    id: 1,
    title: "Editare Foto Basic",
    description: "Corecție culori, ajustare expunere, crop și îndreptare orizont.",
    price: "50 RON / imagine",
    icon: "camera"
  },
  {
    id: 2,
    title: "Retușare Portret",
    description: "Curățare ten, albire dinți, accentuare ochi, dodge & burn.",
    price: "100 RON / imagine",
    icon: "edit"
  },
  {
    id: 3,
    title: "Manipulare Digitală (Liquify)",
    description: "Remodelare corporală, ajustări geometrice, efecte artistice fluide.",
    price: "150 RON / imagine",
    icon: "tool"
  },
  {
    id: 4,
    title: "Restaurare Foto Vechi",
    description: "Reparare rupturi, colorizare imagini alb-negru, eliminare pete.",
    price: "200 RON / imagine",
    icon: "image"
  }
];

const Services: React.FC<ServicesProps> = ({ setPage }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'edit': return <Edit3 size={32} />;
      case 'tool': return <PenTool size={32} />;
      case 'image': return <Image size={32} />;
      default: return <Camera size={32} />;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
       <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Serviciile Noastre</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Oferim o gamă completă de servicii de post-procesare, adaptate nevoilor tale, fie că ești fotograf profesionist sau entuziast.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesList.map((service) => (
          <div key={service.id} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-slate-900 rounded-xl text-purple-400 border border-slate-700">
                {getIcon(service.icon)}
              </div>
              <span className="px-4 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/20">
                {service.price}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {service.description}
            </p>
            <button 
              onClick={() => setPage(PageState.CONTACT)}
              className="w-full py-3 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg font-medium transition-all"
            >
              Solicită Ofertă
            </button>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mt-20 border-t border-slate-800 pt-12">
        <h3 className="text-2xl font-bold text-white text-center mb-10">Cum lucrăm?</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {[
            { step: "1", text: "Ne trimiți pozele" },
            { step: "2", text: "Discutăm stilul" },
            { step: "3", text: "Procesăm magic" },
            { step: "4", text: "Livrare rapidă" }
          ].map((item, idx) => (
             <div key={idx} className="relative">
               <div className="w-12 h-12 mx-auto bg-slate-700 rounded-full flex items-center justify-center font-bold text-white mb-4 border-4 border-slate-800 z-10 relative">
                 {item.step}
               </div>
               {idx < 3 && <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-700 -z-0"></div>}
               <p className="text-slate-300 font-medium">{item.text}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;