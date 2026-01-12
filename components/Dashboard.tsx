import React from 'react';
import { CANDIDATES, PETRO_APPROVAL } from '../constants';
import { VotingIntentChart, ApprovalChart } from './Charts';
import { TrendingUp, Users, AlertTriangle, Activity } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const topCandidate = CANDIDATES.reduce((prev, current) => (prev.votingIntention > current.votingIntention) ? prev : current);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Líder Encuesta (1ra Vuelta)</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{topCandidate.name}</h3>
              <span className="text-emerald-600 text-sm font-medium flex items-center mt-1">
                <TrendingUp size={14} className="mr-1" /> {topCandidate.votingIntention}%
              </span>
            </div>
            <div className="p-2 bg-blue-50 text-blue-700 rounded-lg">
              <Users size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Aprobación Petro</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">35.7%</h3>
              <span className="text-red-600 text-sm font-medium flex items-center mt-1">
                <TrendingUp size={14} className="mr-1 rotate-180" /> Desaprobación 53.5%
              </span>
            </div>
            <div className="p-2 bg-red-50 text-red-700 rounded-lg">
              <Activity size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Tema Principal</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">Seguridad</h3>
              <p className="text-slate-400 text-xs mt-1">Aumento de extorsión y homicidios</p>
            </div>
            <div className="p-2 bg-amber-50 text-amber-700 rounded-lg">
              <AlertTriangle size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">Muestra</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">4,520</h3>
              <p className="text-slate-400 text-xs mt-1">Margen error ±1% (AtlasIntel)</p>
            </div>
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <Users size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Intención de Voto (1ra Vuelta)</h3>
          <VotingIntentChart data={CANDIDATES} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Aprobación Presidencial</h3>
            <ApprovalChart data={PETRO_APPROVAL} />
            <div className="mt-4 space-y-2">
                <p className="text-sm text-slate-600"><strong>Insight:</strong> La alta desaprobación (53.5%) está impulsando el voto "anti-continuismo" favoreciendo a la derecha.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
