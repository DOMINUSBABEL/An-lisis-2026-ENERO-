import React from 'react';
import { View } from '../types';
import { LayoutDashboard, PieChart, Smartphone, Users, Bot, Menu, X, Scale, PlayCircle, BookOpen, Map, FileText, Activity, MessageSquare, TrendingUp, ShieldAlert } from 'lucide-react';

interface LayoutProps {
  currentView: View;
  onNavigate: (view: View) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, onNavigate, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const NavItem = ({ view, icon: Icon, label }: { view: View; icon: any; label: string }) => (
    <button
      onClick={() => {
        onNavigate(view);
        setIsSidebarOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-colors mb-1 ${
        currentView === view
          ? 'bg-blue-900 text-white shadow-md font-semibold'
          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <h3 className="px-4 mt-6 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
        {title}
    </h3>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex font-inter">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-72 bg-slate-950 text-white transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">Colombia 2026</h1>
            <p className="text-[10px] text-blue-400 mt-1 uppercase tracking-widest font-semibold">Informe Estratégico</p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400">
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2 custom-scrollbar">
          <NavItem view={View.DASHBOARD} icon={LayoutDashboard} label="Resumen Ejecutivo" />

          <SectionHeader title="Cap. 1: Contexto País" />
          <NavItem view={View.METHODOLOGY} icon={FileText} label="Ficha Técnica" />
          <NavItem view={View.COUNTRY_MOOD} icon={Activity} label="Humor Social y Problemas" />

          <SectionHeader title="Cap. 2: Análisis Electoral" />
          <NavItem view={View.POLLS} icon={PieChart} label="Intención de Voto" />
          <NavItem view={View.EVOLUTION} icon={Activity} label="Evolución Histórica" />
          <NavItem view={View.REGIONAL_DETAIL} icon={Map} label="Detalle Regional" />

          <SectionHeader title="Cap. 3: Candidatos" />
          <NavItem view={View.CANDIDATES} icon={Users} label="Perfiles Detallados" />
          <NavItem view={View.COMPARATOR} icon={Scale} label="Comparador Directo" />
          <NavItem view={View.SOCIAL} icon={Smartphone} label="Análisis Redes Sociales" />

          <SectionHeader title="Cap. 4: Prospectiva" />
          <NavItem view={View.SIMULATOR} icon={PlayCircle} label="Simulador 2da Vuelta" />
          <NavItem view={View.AI_ANALYST} icon={Bot} label="Analista IA" />

          <SectionHeader title="Cap. 5: Inteligencia Digital" />
          <NavItem view={View.DIGITAL_NARRATIVES} icon={MessageSquare} label="Narrativas y Tópicos" />
          <NavItem view={View.DIGITAL_BENCHMARK} icon={TrendingUp} label="Benchmarking & SOV" />
          <NavItem view={View.DIGITAL_RISKS} icon={ShieldAlert} label="Matriz de Riesgos" />
        </nav>

        {/* Branding Footer */}
        <div className="p-6 bg-slate-900 border-t border-slate-800">
           <div className="text-center">
             <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">Realizado por</p>
             <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                <h4 className="font-serif text-lg font-bold text-white tracking-wide">TALLEYRAND</h4>
                <p className="text-[9px] text-slate-400 uppercase tracking-widest">Consultora Política</p>
             </div>
             <p className="text-[10px] text-slate-600 mt-3">Confidencial • Enero 2026</p>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="bg-white border-b border-slate-200 lg:hidden p-4 flex items-center justify-between">
            <div>
                <h1 className="font-bold text-slate-900 text-lg">Colombia 2026</h1>
                <p className="text-xs text-slate-500">Por Consultora Talleyrand</p>
            </div>
            <button onClick={() => setIsSidebarOpen(true)} className="text-slate-600">
                <Menu size={24} />
            </button>
        </header>

        <main className="flex-1 overflow-auto bg-slate-100/50 p-4 lg:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-6 pb-4 border-b border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 font-serif">
                        {currentView === View.DASHBOARD && 'Resumen Ejecutivo'}
                        {currentView === View.METHODOLOGY && 'Ficha Técnica Metodológica'}
                        {currentView === View.COUNTRY_MOOD && 'Contexto: Humor Social y Problemas'}
                        {currentView === View.POLLS && 'Intención de Voto: Primera Vuelta'}
                        {currentView === View.EVOLUTION && 'Evolución de Tendencias (6 Meses)'}
                        {currentView === View.REGIONAL_DETAIL && 'Análisis Regional Profundo'}
                        {currentView === View.SOCIAL && 'Análisis de Redes Sociales'}
                        {currentView === View.CANDIDATES && 'Perfiles Estratégicos'}
                        {currentView === View.COMPARATOR && 'Comparativa Head-to-Head'}
                        {currentView === View.SIMULATOR && 'Escenarios de Segunda Vuelta'}
                        {currentView === View.AI_ANALYST && 'Consultar Informe con IA'}
                        
                        {/* New Views Headers */}
                        {currentView === View.DIGITAL_NARRATIVES && 'Narrativas y Clusters Semánticos'}
                        {currentView === View.DIGITAL_BENCHMARK && 'Benchmarking Competitivo y SOV'}
                        {currentView === View.DIGITAL_RISKS && 'Matriz de Riesgos y Ataques'}
                    </h2>
                    <p className="text-slate-500 mt-1 text-sm">
                        {currentView === View.DASHBOARD && 'Principales hallazgos del estudio de opinión pública.'}
                        {currentView === View.METHODOLOGY && 'Detalles técnicos de la muestra y recolección de datos.'}
                        {currentView === View.COUNTRY_MOOD && 'Percepción ciudadana sobre el rumbo del país y principales preocupaciones.'}
                        {currentView === View.POLLS && 'Resultados consolidados de la encuesta nacional.'}
                        {currentView === View.EVOLUTION && 'Comportamiento de la intención de voto desde Junio 2025.'}
                        {currentView === View.REGIONAL_DETAIL && 'Desglose territorial de las preferencias electorales.'}
                        {currentView === View.SOCIAL && 'Métricas de seguidores, engagement y análisis de sentimiento por candidato.'}
                        {currentView === View.DIGITAL_NARRATIVES && 'Análisis de los tópicos de conversación dominantes y su carga emocional.'}
                        {currentView === View.DIGITAL_BENCHMARK && 'Métricas de crecimiento, eficiencia por plataforma y cuota de conversación.'}
                        {currentView === View.DIGITAL_RISKS && 'Monitoreo de amenazas activas, fake news y coordinación inauténtica.'}
                    </p>
                </div>
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};
