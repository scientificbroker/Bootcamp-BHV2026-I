import React from 'react';
import { ArrowRight, Calendar, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { IMAGES, FORM_URL, BROCHURE_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Amazon Rainforest Aerial View" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bio-dark/95 via-bio-dark/80 to-bio-main/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bio-main/20 backdrop-blur-sm border border-bio-main/30 text-bio-light mb-6 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bio-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-bio-accent"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide uppercase">Convocatoria Abierta 2026</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 drop-shadow-lg">
            Bootcamp Bioemprendedores <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bio-main to-bio-accent">
              "Salvando la Amazonía"
            </span>
          </h1>

          <p className="font-serif text-lg md:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl text-shadow-sm">
            Acelera tu startup verde. Transforma ciencia en impacto y lleva tu proyecto de la idea a la inversión en solo 8 semanas.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center mb-12">
             <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group shadow-bio-main/50">
                Postular Ahora (Becas Disponibles)
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href={BROCHURE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="lg">
                Ver Brochure
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 text-white">
              <AlertCircle className="text-bio-accent w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-slate-300 uppercase font-bold">Cierre de Inscripciones</p>
                <p className="font-semibold">15 de Febrero, 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white border-t md:border-t-0 md:border-l border-white/20 pt-2 md:pt-0 md:pl-4">
              <Calendar className="text-bio-main w-6 h-6" />
              <div className="text-left">
                <p className="text-xs text-slate-300 uppercase font-bold">Inicio del Programa</p>
                <p className="font-semibold">01 de Marzo, 2026</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};