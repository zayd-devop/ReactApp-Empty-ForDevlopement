import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { 
  Menu, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-md py-3'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:scale-105 transition-transform">
              <circle cx="50" cy="50" r="50" fill="#D32F2F"/>
              <path d="M58 20L35 50H55L42 80L65 50H45L58 20Z" fill="white"/>
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-black text-red-600 uppercase tracking-tighter">
                TECHNO SERVICES
              </span>
              <span className="text-[9px] font-bold text-slate-700 uppercase tracking-widest">
                EL OUARTI S.A.R.L
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold text-slate-600 uppercase tracking-widest">
            <Link to="/" className={`hover:text-red-600 transition-colors ${location.pathname === '/' ? 'text-red-600' : ''}`}>Accueil</Link>
            <Link to="/services" className={`hover:text-red-600 transition-colors ${location.pathname === '/services' ? 'text-red-600' : ''}`}>Services</Link>
            <Link to="/about" className={`hover:text-red-600 transition-colors ${location.pathname === '/about' ? 'text-red-600' : ''}`}>À propos</Link>
            <Link to="/contact" className={`hover:text-red-600 transition-colors ${location.pathname === '/contact' ? 'text-red-600' : ''}`}>Contact</Link>
            
            <Link to="/contact">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 text-[10px] font-bold shadow-md border-none transition-all">
                DEVIS
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4 font-bold text-slate-600 uppercase tracking-widest text-[11px] text-center">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-red-600">Accueil</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-red-600">Services</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-red-600">À Propos</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-red-600">Contact</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="bg-red-600 w-full rounded-lg text-[11px]">Demander un devis</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
