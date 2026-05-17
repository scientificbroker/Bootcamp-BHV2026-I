import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Requirements } from './components/Requirements';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { 
  Leaf, 
  MapPin, 
  Users, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X,
  Presentation,
  Clock,
  Laptop,
  Search,
  FileText,
  Image,
  ShieldCheck,
  Award
} from 'lucide-react';
import { MENTOR_AREAS, FAQ_DATA, IMAGES, FORM_URL, STARTUPS_DATA, Startup } from './constants';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState('Todos');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bio-dark/90 backdrop-blur-md border-b border-white/10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Area */}
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg">
                 <Leaf className="w-6 h-6 text-bio-main" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">BioHub<span className="text-bio-main">Venture</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-bio-main transition-colors text-sm font-medium">Programa</a>
              <a href="#timeline" className="hover:text-bio-main transition-colors text-sm font-medium">Cronograma</a>
              <a href="#demoday" className="hover:text-bio-main transition-colors text-sm font-medium">Demo Day</a>
              <a href="#certificates" className="hover:text-bio-main transition-colors text-sm font-medium">Certificados</a>
              <a href="#faq" className="hover:text-bio-main transition-colors text-sm font-medium">FAQ</a>
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="primary">Postular</Button>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bio-dark border-t border-white/10 p-4 space-y-4">
            <a href="#about" className="block py-2 text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Programa</a>
            <a href="#timeline" className="block py-2 text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Cronograma</a>
            <a href="#demoday" className="block py-2 text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Demo Day</a>
            <a href="#certificates" className="block py-2 text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Certificados</a>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button fullWidth onClick={() => setMobileMenuOpen(false)}>Postular Ahora</Button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <main className="flex-grow">
        <Hero />

        {/* Problem & Solution (Context) */}
        <Section id="about" className="relative overflow-hidden">
          <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h4 className="text-bio-main font-bold uppercase tracking-widest mb-2 text-sm">El Contexto</h4>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    La Amazonía te necesita. <br />
                    <span className="text-slate-500">Tú tienes la solución.</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6 font-serif">
                    Enfrentamos amenazas críticas: cambio climático, pérdida de biodiversidad y desconexión social. Los jóvenes líderes son la clave, pero necesitan herramientas de clase mundial.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    Nuestra metodología combina <strong>Lean Coding</strong>, Validación de Mercado y Mentoría en vivo para transformar una idea científica en una empresa de alto impacto.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {["8 Semanas", "Híbrido", "Beca Disponible"].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-bio-light/50 text-bio-dark rounded-lg font-semibold text-sm border border-bio-main/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-bio-main/20 rounded-full blur-3xl opacity-50"></div>
                  <img 
                    src={IMAGES.context} 
                    alt="Espacio de trabajo minimalista para startups" 
                    className="relative rounded-2xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
             </div>
          </div>
        </Section>

        {/* Tech Specs (Details) */}
        <Section id="details" variant="dark">
           <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Users className="w-8 h-8 text-bio-accent mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Organiza</h3>
                    <p className="text-slate-300 text-sm">BioHubVenture, BioGenia, IGBM, Scale, Venture Hub Bio.</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Laptop className="w-8 h-8 text-bio-accent mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Modalidad</h3>
                    <p className="text-slate-300 text-sm">Híbrida: 50h Virtuales + 8h Presenciales (Cierre).</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <Clock className="w-8 h-8 text-bio-accent mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Horarios</h3>
                    <p className="text-slate-300 text-sm">Clases en vivo: <br/>Martes 10am y Viernes 3pm.</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <MapPin className="w-8 h-8 text-bio-accent mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">Demo Day</h3>
                    <p className="text-slate-300 text-sm">Casa Tovar,<br/>Miraflores, Lima.</p>
                 </div>
              </div>
           </div>
        </Section>

        {/* Outcomes */}
        <Section variant="light">
           <div className="container mx-auto px-4 max-w-5xl">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-slate-900">
               Perfil de Salida: <span className="text-bio-main">Lo que lograrás</span>
             </h2>
             <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
               {[
                 "MVP validado con usuarios reales.",
                 "Pitch Deck profesional con storytelling de inversión.",
                 "Modelo de Negocio Escalable y Sostenible.",
                 "Comprensión profunda del Protocolo de Nagoya e IP.",
                 "Acceso directo a Red de Mentores y Capital Semilla.",
                 "Certificación oficial de las 5 instituciones aliadas."
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                   <div className="bg-bio-main rounded-full p-1">
                     <Check className="w-4 h-4 text-white" />
                   </div>
                   <span className="font-medium text-slate-700">{item}</span>
                 </div>
               ))}
             </div>
           </div>
        </Section>

        {/* Timeline */}
        <Section id="timeline" variant="gradient">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-slate-900">
              De la Idea al Demo Day
            </h2>
            <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
              Un viaje intensivo de 8 semanas diseñado para reducir el riesgo de tu emprendimiento científico.
            </p>
            <Timeline />
          </div>
        </Section>

        {/* Demo Day Feature */}
        <Section id="demoday" className="bg-bio-dark text-white overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-bio-main/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1 text-center md:text-left">
                 <span className="inline-block px-3 py-1 bg-bio-main/20 text-bio-accent rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-bio-main/20">EVENTO CULMINADO CON ÉXITO</span>
                 <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                   El Gran Cierre: <br/>
                   <span className="text-white">Así fue nuestro</span> <span className="text-bio-accent">Demo Day</span>
                 </h2>
                 <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                   El pasado **25 de Abril** celebramos con gran orgullo el cierre del bootcamp. Las **12 startups finalistas** de la primera cohorte presentaron sus pitches de alto impacto ante inversores líderes de venture capital y corporaciones de los sectores Pharma y Agro, obteniendo sus credenciales oficiales verificadas criptográficamente.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
                   <a 
                     href="#certificates" 
                     className="inline-flex items-center gap-2 bg-gradient-to-r from-bio-main to-bio-accent text-slate-900 font-extrabold px-6 py-3.5 rounded-xl hover:shadow-lg hover:shadow-bio-main/25 hover:-translate-y-0.5 transition-all text-sm w-full sm:w-auto justify-center shadow-md font-sans"
                   >
                     <Award className="w-5 h-5 shrink-0" />
                     <span>Explorar 12 Startups y Certificados</span>
                   </a>
                   
                   <div className="flex gap-3 w-full sm:w-auto justify-center">
                     <div className="bg-black/40 px-4 py-2 rounded-xl text-center border border-white/10 shrink-0">
                        <span className="block text-lg font-bold font-mono text-bio-accent">25</span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Abril</span>
                     </div>
                     <div className="bg-black/40 px-4 py-2 rounded-xl text-center border border-white/10 shrink-0">
                        <span className="block text-lg font-bold font-mono text-bio-accent">12</span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400">Startups</span>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="flex-1 w-full max-w-md">
                 <div className="aspect-video bg-gradient-to-br from-slate-800 to-black rounded-xl overflow-hidden shadow-2xl relative group border border-white/20">
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                       <a 
                         href="#certificates" 
                         className="w-16 h-16 bg-bio-main text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:bg-bio-accent hover:scale-110 transition-all duration-300 animate-pulse"
                         title="Explorar 12 Startups y Certificados"
                       >
                         <Award className="w-8 h-8" />
                       </a>
                    </div>
                    <img src={IMAGES.demoDay} className="opacity-45 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Auditorio Demo Day" />
                 </div>
                 <p className="text-center text-sm text-slate-400 mt-4 font-medium">Requisito de Graduación: Completado</p>
               </div>
            </div>
          </div>
        </Section>

        {/* Mentors Grid */}
        <Section>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Áreas de Mentoría Especializada</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MENTOR_AREAS.map((area, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-white shadow-lg border border-slate-100 hover:border-bio-main/30 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-bio-light flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-bio-dark" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{area.title}</h3>
                  <p className="text-slate-600 text-sm">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Showcase / Buscador de Certificados */}
        <Section id="certificates" className="bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-bio-main/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h4 className="text-bio-main font-bold uppercase tracking-widest mb-2 text-sm">Graduados de Éxito</h4>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Startups Certificadas de la <span className="text-bio-dark">Primera Cohorte (2026-I)</span>
              </h2>
              <p className="text-slate-600 text-lg">
                Explora el ecosistema de bioemprendimientos de la Amazonía que completaron con éxito nuestro bootcamp y validaron sus credenciales de forma inmutable en la blockchain de Ethereum (Sepolia).
              </p>
            </div>

            {/* Filtros y Buscador */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 mb-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Input de Búsqueda */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Buscar startup, CEO..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-bio-main/20 focus:border-bio-main transition-all font-medium text-slate-700 placeholder-slate-400"
                />
              </div>

              {/* Botonera de Filtros */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {['Todos', 'Alto Rendimiento', 'Aprobados', 'Sin clasificación'].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setSelectedTier(tier)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                      selectedTier === tier 
                        ? 'bg-bio-dark border-bio-dark text-white shadow-md' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-bio-main/30'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Listado de Startups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(() => {
                const getTierColor = (tier: string) => {
                  if (tier.includes("Listo con ajustes")) return "bg-amber-100 text-amber-800 border-amber-200";
                  if (tier.includes("Fundación sólida")) return "bg-emerald-100 text-emerald-800 border-emerald-200";
                  if (tier.includes("Cumple requisitos")) return "bg-blue-100 text-blue-800 border-blue-200";
                  if (tier.includes("Sin clasificación")) return "bg-slate-100 text-slate-800 border-slate-200";
                  return "bg-rose-100 text-rose-800 border-rose-200";
                };

                const filteredStartups = STARTUPS_DATA.filter((startup) => {
                  const matchesSearch = 
                    startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    startup.ceo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    startup.members.toLowerCase().includes(searchTerm.toLowerCase());
                  
                  if (selectedTier === 'Todos') return matchesSearch;
                  if (selectedTier === 'Alto Rendimiento') {
                    return matchesSearch && parseFloat(startup.score) >= 70;
                  }
                  if (selectedTier === 'Aprobados') {
                    return matchesSearch && parseFloat(startup.score) > 0 && parseFloat(startup.score) < 70;
                  }
                  return matchesSearch && startup.tier === selectedTier;
                });

                if (filteredStartups.length === 0) {
                  return (
                    <div className="col-span-full py-16 text-center">
                      <div className="text-slate-300 font-bold text-5xl mb-4">📭</div>
                      <p className="text-slate-500 font-medium">No se encontraron startups que coincidan con la búsqueda o filtro.</p>
                    </div>
                  );
                }

                return filteredStartups.map((startup) => (
                  <div 
                    key={startup.name} 
                    className="bg-white rounded-2xl shadow-xl border border-slate-100 hover:border-bio-main/30 hover:-translate-y-1.5 transition-all p-6 flex flex-col justify-between overflow-hidden relative group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-bio-main/5 rounded-bl-full group-hover:bg-bio-main/10 transition-colors duration-300"></div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-bio-dark transition-colors">{startup.name}</h3>
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-0.5">BioStartup</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-bio-dark to-bio-main text-white px-3.5 py-1.5 rounded-full font-mono font-bold text-sm shadow-md flex items-center gap-1">
                          <span>{startup.score}</span>
                          <span className="text-[10px] text-white/70">/100</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-start gap-2">
                          <Users className="w-4 h-4 text-bio-main mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-slate-400 font-medium">CEO / Fundador</p>
                            <p className="text-sm font-semibold text-slate-700">{startup.ceo}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-bio-light flex items-center justify-center text-[10px] text-bio-dark font-bold shrink-0 mt-0.5">★</div>
                          <div>
                            <p className="text-xs text-slate-400 font-medium">Logro / Clasificación</p>
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border mt-1 ${getTierColor(startup.tier)}`}>
                              {startup.tier}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4 mt-2 space-y-2.5">
                      <div className="grid grid-cols-2 gap-2">
                        <a 
                          href={startup.htmlUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-1.5 bg-bio-light hover:bg-bio-main/20 text-bio-dark font-bold text-xs py-2 px-3 rounded-lg border border-bio-main/10 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 shrink-0" />
                          <span>Ver Web</span>
                        </a>
                        <a 
                          href={startup.pngUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center justify-center gap-1.5 bg-paper hover:bg-slate-200 text-slate-700 font-bold text-xs py-2 px-3 rounded-lg border border-slate-200 transition-colors"
                        >
                          <Image className="w-3.5 h-3.5 shrink-0" />
                          <span>Ver PNG</span>
                        </a>
                      </div>
                      
                      <a 
                        href={startup.jsonUrl} 
                        download 
                        className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2 px-3 rounded-lg w-full transition-colors shadow-sm"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-bio-accent shrink-0" />
                        <span>Verificación Blockchain (.json)</span>
                      </a>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </Section>

        {/* Application Requirements */}
        <Section id="postulate" className="bg-paper">
          <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Postula al Bootcamp</h2>
               <p className="text-slate-600">Proceso selectivo. Buscamos compromiso y visión.</p>
             </div>
             <Requirements />
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" variant="light">
           <div className="container mx-auto px-4 max-w-3xl">
             <h2 className="text-3xl font-display font-bold text-center mb-10">Preguntas Frecuentes</h2>
             <div className="space-y-4">
               {FAQ_DATA.map((item, index) => (
                 <div key={index} className="border border-slate-200 rounded-lg bg-white overflow-hidden">
                   <button 
                     className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                     onClick={() => toggleFaq(index)}
                   >
                     <span className="font-semibold text-slate-800 pr-4">{item.question}</span>
                     {openFaqIndex === index ? <ChevronUp className="text-bio-main" /> : <ChevronDown className="text-slate-400" />}
                   </button>
                   {openFaqIndex === index && (
                     <div className="p-5 pt-0 text-slate-600 text-sm border-t border-slate-100 mt-2 bg-slate-50/50">
                       {item.answer}
                     </div>
                   )}
                 </div>
               ))}
             </div>
           </div>
        </Section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-bio-main" />
                <span className="font-display font-bold text-lg text-white tracking-tight">BioHub<span className="text-bio-main">Venture</span></span>
              </div>
              <p className="text-sm max-w-sm mb-4">
                Impulsando la próxima generación de unicornios biotecnológicos desde la Amazonía para el mundo.
              </p>
              <div className="flex gap-4">
                 {/* Social placeholders */}
                 <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-bio-main cursor-pointer transition-colors"></div>
                 <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-bio-main cursor-pointer transition-colors"></div>
                 <div className="w-8 h-8 bg-slate-800 rounded-full hover:bg-bio-main cursor-pointer transition-colors"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Programa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-bio-main">Módulos</a></li>
                <li><a href="#mentors" className="hover:text-bio-main">Mentores</a></li>
                <li><a href="#faq" className="hover:text-bio-main">Becas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-bio-main">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-bio-main">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-bio-main">Código de Ética</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            © 2026 BioHubVenture & BioGenia. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 z-50">
        <Button fullWidth onClick={() => window.open(FORM_URL, '_blank')}>
          Postular (Cierre 15 Feb)
        </Button>
      </div>

    </div>
  );
};

export default App;