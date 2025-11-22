import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-6">Hai să vorbim despre proiectul tău</h2>
          <p className="text-slate-400 mb-8">
            Ai o idee creativă sau nevoie de servicii de editare? Completează formularul sau contactează-ne direct.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-purple-400">
                <Mail size={20} />
              </div>
              <span>contact@luminastudio.ro</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-purple-400">
                <Phone size={20} />
              </div>
              <span>+40 700 123 456</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-300">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-purple-400">
                <MapPin size={20} />
              </div>
              <span>București, Sector 1</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Mesaj Trimis!</h3>
              <p className="text-slate-400">Mulțumim. Te vom contacta în curând.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-purple-400 hover:text-purple-300 underline"
              >
                Trimite alt mesaj
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nume</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Ion Popescu"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="ion@exemplu.ro"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Mesaj</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="Detalii despre proiect..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Trimite Mesajul <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;