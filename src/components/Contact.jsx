import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  MessageCircle, 
  ShieldCheck
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "212654276580"; 
    const text = `*Devis Site Web*%0A%0A*Nom:* ${formData.name}%0A*Tél:* ${formData.phone}%0A*Besoin:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-16 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-16 text-white relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight">Contactez nos Experts</h1>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Nos ingénieurs vous répondent en moins de 24h pour toute intervention au Maroc.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="text-red-600 size-5 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-tight">Tanger, Maroc</h4>
                      <p className="text-slate-500 text-[11px]">Siège stratégique pour tout le royaume.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-red-600 size-5 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-tight">0654 276 580</h4>
                      <p className="text-slate-500 text-[11px]">Ligne directe d'urgence 24/7.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-red-600 size-5 shrink-0" />
                    <div>
                      <h4 className="font-black text-slate-900 text-xs uppercase tracking-tight truncate">technoservices.elouarti@gmail.com</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-sm">
                <div className="flex items-center gap-3 text-red-500 font-black text-[9px] uppercase tracking-widest mb-4">
                  <ShieldCheck size={16} /> Certifié & Assuré
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Interventions conformes aux normes NF C 15-100.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Nom / Société</label>
                      <Input name="name" value={formData.name} onChange={handleChange} className="h-12 rounded-xl text-xs font-bold" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Téléphone</label>
                      <Input name="phone" value={formData.phone} onChange={handleChange} className="h-12 rounded-xl text-xs font-bold" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Besoin</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} className="min-h-[120px] rounded-xl text-xs font-bold" required />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white h-14 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-md">
                    Envoyer <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};