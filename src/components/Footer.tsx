import React from 'react';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#D32F2F"/>
                <path d="M58 20L35 50H55L42 80L65 50H45L58 20Z" fill="white"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-black text-red-600 uppercase tracking-tighter">TECHNO SERVICES</span>
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-none">EL OUARTI S.A.R.L</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Maintenance industrielle et installations électriques basse tension.
              Basé à Tanger, intervention partout au Maroc.
              <br /><br />
              <strong className="text-slate-900">Votre partenaire confiance pour la continuité de service.</strong>
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-8 relative inline-block">
              Nous Contacter
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-red-600 rounded-full"></div>
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-4 group cursor-default">
                <div className="size-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Localisation</span>
                  <span className="text-slate-700 font-medium text-sm">Tanger, Maroc</span>
                </div>
              </li>
              <li className="flex gap-4 group cursor-default">
                <div className="size-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Téléphone</span>
                  <span className="text-slate-700 font-medium text-sm">0654 276 580</span>
                </div>
              </li>
              <li className="flex gap-4 group cursor-default">
                <div className="size-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</span>
                  <span className="text-slate-700 font-medium text-sm truncate max-w-[200px]">technoservices.elouarti@gmail.com</span>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-xl px-8 py-6 h-auto font-black uppercase text-xs tracking-widest shadow-lg shadow-red-100 border-none transition-all">
                  Demander un devis
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 3: Map */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-8 relative inline-block">
              Notre Localisation
              <div className="absolute -bottom-2 left-0 w-8 h-1 bg-red-600 rounded-full"></div>
            </h4>
            <div className="h-64 rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 group">
              <iframe 
                title="Localisation Techno Services"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103630.77943482704!2d-5.898730992384974!3d35.77533866209569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b875cf04c132d%3A0x76bfc571bfb4e17a!2sTanger%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1706112345678!5m2!1sfr!2sma" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:scale-110 transition-transform duration-700"
              >
              </iframe>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Techno Services El Ouarti S.A.R.L - Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-red-600 cursor-pointer transition-colors">Politique de confidentialité</span>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-red-600 cursor-pointer transition-colors">Mentions légales</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
