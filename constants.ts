import { 
  Sprout, 
  Search, 
  Target, 
  Briefcase, 
  Scale, 
  DollarSign, 
  Rocket, 
  Trophy 
} from 'lucide-react';
import { ModuleItem, FaqItem, MentorArea } from './types';

// ==========================================
// CONFIGURACIÓN DE URLS
// ==========================================
export const FORM_URL = "https://forms.gle/qkgTTyR2GUcTbrZ97";
export const BROCHURE_URL = "https://www.canva.com/design/DAG-PfvWFLc/Cw6pU-Mw7JbklAJtwIZvJg/view?utm_content=DAG-PfvWFLc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h06861dc3cb";

// ==========================================
// CONFIGURACIÓN DE IMÁGENES
// ==========================================
// Para cambiar una imagen:
// 1. Si es externa, pega la URL completa.
// 2. Si es un archivo local subido, usa: "/nombre-archivo.extensión" (ej: "/hero-bg.png")
export const IMAGES = {
  hero: "https://picsum.photos/id/1039/1920/1080",      // Imagen de fondo principal
  context: "https://picsum.photos/id/1039/1920/1080",                   // Imagen sección 'El Contexto' (Link usuario)
  demoDay: "https://picsum.photos/id/1039/1920/1080"        // Imagen sección 'Demo Day' (Edificio/Auditorio)
};

export const TIMELINE_DATA: ModuleItem[] = [
  {
    week: "Semana 1",
    dates: "03-07 Mar",
    title: "Contexto y Oportunidad",
    focus: "Contexto Amazónico, Biodiversidad y Problem Framing.",
    icon: Sprout
  },
  {
    week: "Semana 2",
    dates: "10-14 Mar",
    title: "Propuesta de Valor",
    focus: "Diseño de Solución y Customer Discovery.",
    icon: Search
  },
  {
    week: "Semana 3",
    dates: "17-21 Mar",
    title: "Validación Remota",
    focus: "Salida al Mercado y Feedback inicial.",
    icon: Target
  },
  {
    week: "Semana 4",
    dates: "24-28 Mar",
    title: "Modelo de Negocio",
    focus: "Estructura Comercial y Business Model Canvas.",
    icon: Briefcase
  },
  {
    week: "Semana 5",
    dates: "31 Mar-04 Abr",
    title: "Regulación & IP",
    focus: "Marco Legal, Protocolo de Nagoya y Ética.",
    icon: Scale
  },
  {
    week: "Semana 6",
    dates: "07-11 Abr",
    title: "Finanzas & Funding",
    focus: "Viabilidad Financiera y Estrategia de Capital.",
    icon: DollarSign
  },
  {
    week: "Semana 7",
    dates: "14-18 Abr",
    title: "PMV & Gestión",
    focus: "Construcción de Prototipo y Deck de Inversión.",
    icon: Rocket
  },
  {
    week: "Semana 8",
    dates: "21-25 Abr",
    title: "Demo Day & Graduación",
    focus: "Presentación final en Casa Tovar, Lima.",
    icon: Trophy
  }
];

export const MENTOR_AREAS: MentorArea[] = [
  { title: "Innovación Tecnológica", description: "Biotecnología aplicada y desarrollo de producto.", icon: Sprout },
  { title: "Propiedad Intelectual", description: "Patentes, modelos de utilidad y protección.", icon: Scale },
  { title: "Finanzas & Valuación", description: "Unit economics y valoración de startups.", icon: DollarSign },
  { title: "Sostenibilidad & ESG", description: "Impacto ambiental y métricas ODS.", icon: Sprout }, 
  { title: "Marketing Growth", description: "Estrategias de crecimiento y go-to-market.", icon: Target },
  { title: "Legal & Tributario", description: "Constitución, contratos y beneficios tributarios.", icon: Scale } 
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "¿Qué pasa si mi startup no es de la Amazonía pero tiene impacto allí?",
    answer: "¡Eres bienvenido! Buscamos soluciones que beneficien al ecosistema amazónico, independientemente de dónde esté constituida legalmente la empresa o dónde residan los fundadores, siempre que el impacto sea verificable en la región."
  },
  {
    question: "¿Es obligatorio asistir presencialmente al Demo Day?",
    answer: "Sí, la graduación y el Demo Day el 25 de abril en Casa Tovar (Lima) son eventos presenciales obligatorios para al menos un fundador líder. Es la oportunidad dorada para conectar con inversores cara a cara."
  },
  {
    question: "¿El programa toma equity (acciones) de mi empresa?",
    answer: "No durante el bootcamp. Nuestro objetivo es prepararte para la inversión. Sin embargo, los fondos asociados al Demo Day podrían ofrecer tickets de inversión a cambio de equity según sus propias tesis."
  },
  {
    question: "¿Necesito tener una empresa constituida para postular?",
    answer: "No es obligatorio estar constituido, pero sí tener un equipo consolidado y una idea validada o en proceso de validación (TRL 3-4). La constitución puede ser parte de tu hoja de ruta durante el programa."
  },
  {
    question: "¿Cómo funcionan las becas?",
    answer: "Gracias a nuestros aliados, ofrecemos becas parciales y completas a los equipos con mayor potencial de impacto y necesidad demostrada. Solo debes marcar la opción de 'Solicitar Beca' en el formulario de postulación."
  },
  {
    question: "¿Cuál es la dedicación horaria requerida?",
    answer: "El programa es intensivo. Requerimos asistencia a las sesiones sincrónicas (Martes 10am y Viernes 3pm) y al menos 10-15 horas semanales de trabajo autónomo en equipo para cumplir con los entregables."
  }
];
