import React, { useState } from 'react';
import { Trash2, CreditCard, Lock, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, removeFromCart, clearCart }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="py-20 px-4 text-center animate-fade-in">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Plată Efectuată cu Succes!</h2>
        <p className="text-slate-400 mb-8">Vei primi produsele pe email în scurt timp.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-8 py-3 bg-purple-600 rounded-full text-white font-bold hover:bg-purple-700 transition-colors"
        >
          Înapoi la Magazin
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="py-20 px-4 text-center animate-fade-in">
        <h2 className="text-2xl font-bold text-white mb-4">Coșul este gol</h2>
        <p className="text-slate-400">Nu ai adăugat încă niciun produs.</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-white font-serif mb-8">Finalizare Comandă</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Cart Summary */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-fit">
          <h3 className="text-xl font-bold text-white mb-4">Sumar Coș</h3>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between pb-4 border-b border-slate-700 last:border-0">
                <div className="flex items-center space-x-4">
                  <img src={item.imageUrl} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.price} RON x {item.quantity}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 p-2"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center text-xl font-bold text-white pt-4 border-t border-slate-700">
            <span>Total:</span>
            <span>{total} RON</span>
          </div>
        </div>

        {/* Payment Mockup */}
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <div className="flex items-center space-x-2 mb-6 text-purple-400">
            <Lock size={20} />
            <h3 className="text-xl font-bold text-white">Date Plată (Securizat)</h3>
          </div>
          
          <form onSubmit={handlePayment} className="space-y-4">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-600 mb-6">
               <p className="text-xs text-yellow-500 mb-2 font-mono">NOTA: Acesta este un mockup. Nu introduce date reale.</p>
               <div className="flex gap-2 mb-4">
                 <div className="bg-white/10 p-2 rounded w-12 h-8"></div>
                 <div className="bg-white/10 p-2 rounded w-12 h-8"></div>
               </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Număr Card</label>
              <div className="relative">
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-900 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-purple-500 focus:border-purple-500" required />
                <CreditCard className="absolute left-3 top-2.5 text-slate-500" size={18} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Expirare</label>
                <input type="text" placeholder="MM/YY" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-purple-500 focus:border-purple-500" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">CVC</label>
                <input type="text" placeholder="123" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-purple-500 focus:border-purple-500" required />
              </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-slate-300 mb-1">Nume pe Card</label>
               <input type="text" placeholder="ION POPESCU" className="w-full bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-purple-500 focus:border-purple-500" required />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className={`w-full py-4 mt-4 rounded-lg font-bold text-white transition-all flex items-center justify-center ${isProcessing ? 'bg-purple-800 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              {isProcessing ? 'Se procesează...' : `Plătește ${total} RON`}
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">Plată securizată prin Stripe (Mockup)</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;