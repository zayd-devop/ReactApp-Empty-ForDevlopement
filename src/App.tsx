import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router';
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Wrench,
  Settings,
  ArrowRight,
  LeafyGreen
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import learLogo from './assets/logos/lear-logo-vector.png';
import yazakiLogo from './assets/logos/yazaki.png';
import marelliLogo from './assets/logos/magneti.png'; 
import coficabLogo from './assets/logos/coficab.png';
import acomeLogo from './assets/logos/acome.png';
import erumLogo from './assets/logos/erum.png';
import elastomerLogo from './assets/logos/elastomer.png';
import brillasLogo from './assets/logos/brillas.png';

// --- Composant Global de Défilement (NOUVEAU) ---
// Ce composant "écoute" les changements de route (pathname) 
// et force le navigateur à scroller en haut à chaque changement.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Il n'affiche rien visuellement
};

// --- Interfaces & Données ---

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'LEAR Corporation', logo: learLogo },
  { name: 'Yazaki', logo: yazakiLogo },
  { name: 'Marelli', logo: marelliLogo },
  { name: 'COFICAB', logo: coficabLogo }, 
  { name: 'ACOME Group', logo: acomeLogo },
  { name: 'ERUM Group', logo: erumLogo },
  { name: 'Elastomer Solutions', logo: elastomerLogo },
  { name: 'Brillas Agusti', logo: brillasLogo }
];

// --- Home Component ---

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1767294274634-613a3545e36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGludGVyaW9yfGVufDF8fHx8MTc3MDIyNjI1OXww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-black uppercase tracking-wider mb-8">
              <MapPin size={12} /> Tanger • Partout au Maroc
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8 uppercase tracking-tight">
              Maintenance <span className="text-red-600">Industrielle</span> <br className="hidden md:block" /> & Électrique
            </h1>
            <p className="text-base text-slate-500 mb-10 leading-relaxed max-w-xl mx-auto">
              Solutions d'ingénierie préventive et curative pour garantir la continuité de vos opérations 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-sm h-auto rounded-xl font-bold border-none">
                  Démarrer un projet <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-slate-200 px-8 py-6 text-sm h-auto rounded-xl font-bold">
                  Nos Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Années d'expérience", value: "10+", icon: Clock },
              { label: "Intervention Urgente", value: "24/7", icon: Zap },
              { label: "Couverture Nationale", value: "100%", icon: ShieldCheck },
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-6 group">
                <div className="bg-white/5 p-4 rounded-2xl">
                  <stat.icon className="text-red-500 size-6" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Domaines d'Intervention</h2>
            <div className="w-16 h-1.5 bg-red-600 rounded-full mb-4 mx-auto"></div>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Une expertise multi-technique pour accompagner la performance de votre parc industriel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Facilities Maintenance",
                desc: "Maintenance préventive, rondes techniques et checklists rigoureuses pour vos infrastructures critiques.",
                img: "https://images.unsplash.com/photo-1561400555-786780284b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
                icon: Wrench
              },
              {
                title: "Génie Électrique",
                desc: "Conception, installation et mise en conformité de vos armoires électriques et réseaux basse tension.",
                img: "https://images.unsplash.com/photo-1641471350928-9e30615cebe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
                icon: Zap
              },
              {
                title: "Multi-technique CVC",
                desc: "Gestion globale de vos systèmes de climatisation, ventilation et sécurité incendie industrielle.",
                img: "https://images.unsplash.com/photo-1751486289950-5c4898a4c773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
                icon: Settings
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-red-600 p-2 rounded-lg">
                      <service.icon className="text-white size-4" />
                    </div>
                    <h3 className="text-white text-sm font-black uppercase tracking-tight">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-500 leading-relaxed mb-6 text-xs">{service.desc}</p>
                  <Link to="/services">
                    <Button variant="outline" size="sm" className="w-full rounded-xl py-4 border-slate-200 text-[10px] font-bold uppercase tracking-widest">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-40 hover:opacity-100 transition-opacity duration-300">
            {clients.map((client, idx) => (
              <div key={idx} className="text-center flex justify-center items-center">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// --- App Entry Point ---

export default function App() {
  return (
    <Router>
      {/* Ajout du composant ScrollToTop ici pour qu'il s'applique à toute l'app */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}