import React from 'react';
import { motion } from 'motion/react';
import { 
  Wrench, 
  Zap, 
  Settings, 
  ShieldCheck, 
  Activity, 
  Thermometer, 
  Droplets, 
  Flame,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Link } from 'react-router';

export const Services = () => {
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="relative py-16 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
            alt="Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest text-[9px] mb-4">
              <Activity size={14} /> Expertise Multi-technique
            </div>
            <h1 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight">Nos Domaines d'Intervention</h1>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Une gamme complète de solutions techniques pour garantir la performance de vos installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            
            {/* 1. Facilities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Wrench className="text-white size-5" />
                  </div>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Facilities Maintenance</h2>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Gestion opérationnelle de vos bâtiments pour garantir la continuité de service.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Maintenance préventive",
                    "Rondes techniques",
                    "Checklists détaillées",
                    "Support technique 24/7"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-600 size-3 shrink-0" />
                      <span className="text-slate-700 font-bold text-[9px] uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <ImageWithFallback src="https://images.unsplash.com/photo-1561400555-786780284b67?q=80&w=800" alt="Facilities" className="w-full aspect-video object-cover" />
              </div>
            </div>

            {/* 2. Électricité */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-row-reverse">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <Zap className="text-white size-5" />
                  </div>
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Génie Électrique</h2>
                </div>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Conception et réalisation d'installations basse tension aux normes.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Armoires Électriques TGBT",
                    "Mise en Conformité NF C 15-100",
                    "Éclairage Industriel LED"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <ShieldCheck className="text-red-600 size-4" />
                      <span className="text-[9px] font-black uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:order-1 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <ImageWithFallback src="https://images.unsplash.com/photo-1641471350928-9e30615cebe5?q=80&w=800" alt="Électricité" className="w-full aspect-video object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Multi-tech grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Multi-technique</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Plomberie Pneumatique incendie CVC", icon: Thermometer },
              { title: "Fluides", icon: Droplets },
              { title: "Sécurité", icon: Flame }
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 text-center">
                <div className="size-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <s.icon size={20} />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};