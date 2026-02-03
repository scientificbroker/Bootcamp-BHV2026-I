import React from 'react';
import { CheckCircle2, Star, Video, Users, MapPin, GraduationCap } from 'lucide-react';
import { Button } from './Button';
import { FORM_URL } from '../constants';

export const Requirements: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Obligatory */}
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-red-50 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-red-500" />
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-800">Requisitos Obligatorios</h3>
        </div>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <Video className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Video Pitch (3 min)</p>
              <p className="text-sm text-slate-600">Presentación clara del problema, solución y equipo. Súbelo a YouTube/Vimeo.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Enfoque Amazónico</p>
              <p className="text-sm text-slate-600">Solución que impacte directa o indirectamente en la biodiversidad o comunidades de la selva.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Users className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Dedicación del Equipo</p>
              <p className="text-sm text-slate-600">Al menos 1 fundador con dedicación mínima del 50% al proyecto durante el programa.</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Recommended */}
      <div className="bg-gradient-to-br from-bio-light/30 to-white rounded-2xl p-8 shadow-xl border border-bio-main/20 h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-bio-main/10 rounded-lg">
            <Star className="w-6 h-6 text-bio-main" />
          </div>
          <h3 className="text-2xl font-display font-bold text-slate-800">Perfil Recomendado</h3>
        </div>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <GraduationCap className="w-5 h-5 text-bio-main/60 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Formación STEM/Negocios</p>
              <p className="text-sm text-slate-600">Equipos multidisciplinarios (Ciencias + Negocios) tienen mayor probabilidad de éxito.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="w-5 h-5 mt-1 shrink-0 flex items-center justify-center font-bold text-xs text-bio-main/60 border border-bio-main/60 rounded">EN</div>
            <div>
              <p className="font-semibold text-slate-800">Idiomas</p>
              <p className="text-sm text-slate-600">Nivel de inglés intermedio/avanzado deseable para acceso a materiales globales.</p>
            </div>
          </li>
        </ul>
        
        <div className="mt-8 pt-6 border-t border-bio-main/10">
          <p className="text-sm text-center text-slate-500 mb-4 italic">
            "Ofrecemos becas del 50% al 100% a los equipos preseleccionados con mayor potencial."
          </p>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button fullWidth size="lg">
                Aplicar a la Beca (Formulario)
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};