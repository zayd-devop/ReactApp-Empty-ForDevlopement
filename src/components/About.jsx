import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Zap,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router';

export const About = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="relative py-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1635961179148-3d886568775c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
            alt="Industrial Header" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="#D32F2F"/>
                <path d="M58 20L35 50H55L42 80L65 50H45L58 20Z" fill="white"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black text-white uppercase tracking-tighter">TECHNO SERVICES</span>
                <span className="text-[8px] font-bold text-red-500 uppercase tracking-widest">EL OUARTI S.A.R.L</span>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-4 uppercase tracking-tight">
              10 ans d'Excellence <span className="text-red-500">Industrielle</span>
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              TECHNO SERVICES EL OUARTI est spécialisée en maintenance industrielle et installations électriques basse tension partout au Maroc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1768796372063-4da660e034b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                  alt="Our Team" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest text-[9px] mb-4">
                <div className="w-6 h-0.5 bg-red-600 rounded-full"></div> Engagement
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Rigueur Technique & Réactivité</h2>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed italic border-l-2 border-red-600 pl-4 py-1">
                "Nous accompagnons les plus grands groupes industriels du Maroc dans l'optimisation de leur parc machine."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Maintenance multi-site",
                  "Installations BT",
                  "Conformité Sécurité",
                  "Urgence 24h/24"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 className="text-red-600 size-4" />
                    <span className="text-slate-700 font-bold text-[9px] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button size="sm" className="bg-slate-900 hover:bg-black text-white rounded-xl px-6 h-12 text-[10px] font-black uppercase tracking-widest">
                  Travailler avec nous <ArrowRight className="ml-2 size-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Rigueur", desc: "Approche méthodique basée sur des protocoles stricts.", icon: ShieldCheck },
              { title: "Sécurité", desc: "La protection de vos actifs est notre priorité.", icon: Award },
              { title: "Réactivité", desc: "Service mobilisable 24/7 pour vos urgences.", icon: Zap }
            ].map((value, idx) => (
              <Card key={idx} className="border-none shadow-sm rounded-3xl bg-white">
                <CardContent className="p-8 text-center">
                  <div className="size-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 mx-auto text-red-600">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-sm font-black mb-4 uppercase tracking-widest">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-[11px]">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};