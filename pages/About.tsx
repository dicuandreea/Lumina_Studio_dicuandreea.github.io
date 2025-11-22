import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
      <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-8 text-center">Despre Lumina Studio</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
          <div className="w-full md:w-1/3">
             <img 
               src="https://picsum.photos/id/64/400/400" 
               alt="Artist Portrait" 
               className="rounded-full w-48 h-48 mx-auto object-cover border-4 border-purple-500 shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Alexandru Ionescu</h3>
            <p className="text-slate-300 italic mb-4">Artist Digital & Retoucher</p>
            <p className="text-slate-400 leading-relaxed">
              "Cred că realitatea este doar un punct de plecare. Prin arta digitală, îmi propun să explorez ceea ce se află dincolo de vizibil, folosind tehnologia pentru a da formă viselor. Fiecare imagine prelucrată este o poveste rescrisă."
            </p>
          </div>
        </div>

        <div className="space-y-6 text-slate-300">
          <p>
            Lumina Studio a luat naștere din pasiunea pentru fotografie și manipulare digitală. Ceea ce a început ca un hobby experimental în timpul facultății a evoluat într-un studio dedicat artei vizuale.
          </p>
          <p>
            Specializarea noastră principală este manipularea de tip <strong>Liquify</strong> pentru a crea forme suprarealiste și corecția cromatică avansată (<strong>Color Grading</strong>) pentru a induce stări emoționale specifice privitorului.
          </p>
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mt-6">
            <h4 className="font-bold text-white mb-2">Filozofia Noastră</h4>
            <p className="text-sm text-slate-400">
              Nu doar edităm poze, ci creăm experiențe. Calitatea primează în fața cantității, iar atenția la detalii este semnătura noastră.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;