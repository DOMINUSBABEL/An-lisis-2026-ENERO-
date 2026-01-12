import React, { useState } from 'react';
import { CANDIDATES } from '../constants';
import { Candidate } from '../types';
import { ArrowRightLeft, Trophy, AlertCircle, Target, Users } from 'lucide-react';

export const Comparator: React.FC = () => {
  const [cand1Id, setCand1Id] = useState<string>(CANDIDATES[0].id);
  const [cand2Id, setCand2Id] = useState<string>(CANDIDATES[1].id);

  const cand1 = CANDIDATES.find(c => c.id === cand1Id) as Candidate;
  const cand2 = CANDIDATES.find(c => c.id === cand2Id) as Candidate;

  const StatRow = ({ label, val1, val2, highlightHigher = true, suffix = '' }: any) => {
    const v1 = typeof val1 === 'string' ? parseFloat(val1) : val1;
    const v2 = typeof val2 === 'string' ? parseFloat(val2) : val2;
    const is1Higher = v1 > v2;
    const isEqual = v1 === v2;

    return (
        <div className="grid grid-cols-3 py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
            <div className={`text-center font-bold ${highlightHigher && is1Higher ? 'text-green-600' : 'text-slate-700'}`}>
                {val1}{suffix}
            </div>
            <div className="text-center text-xs text-slate-500 font-medium uppercase tracking-wide flex items-center justify-center">
                {label}
            </div>
            <div className={`text-center font-bold ${highlightHigher && !is1Higher && !isEqual ? 'text-green-600' : 'text-slate-700'}`}>
                {val2}{suffix}
            </div>
        </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in zoom-in-95 duration-500">
        
        {/* Controls */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <select 
                value={cand1Id} 
                onChange={(e) => setCand1Id(e.target.value)}
                className="w-full md:w-64 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
                {CANDIDATES.map(c => <option key={c.id} value={c.id} disabled={c.id === cand2Id}>{c.name}</option>)}
            </select>

            <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                <ArrowRightLeft size={24} />
            </div>

            <select 
                value={cand2Id} 
                onChange={(e) => setCand2Id(e.target.value)}
                className="w-full md:w-64 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
                {CANDIDATES.map(c => <option key={c.id} value={c.id} disabled={c.id === cand1Id}>{c.name}</option>)}
            </select>
        </div>

        {/* Comparison Grid */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-900 text-white p-4">
                <div className="text-center">
                    <h3 className="font-bold text-lg">{cand1.name}</h3>
                    <p className="text-xs text-slate-400">{cand1.party}</p>
                </div>
                <div className="text-center flex items-center justify-center">
                    <span className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full uppercase">Vs</span>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-lg">{cand2.name}</h3>
                    <p className="text-xs text-slate-400">{cand2.party}</p>
                </div>
            </div>

            {/* Metrics */}
            <div className="p-4">
                <h4 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Métricas Clave</h4>
                <StatRow label="Intención Voto" val1={cand1.votingIntention} val2={cand2.votingIntention} suffix="%" />
                <StatRow label="Edad" val1={cand1.age} val2={cand2.age} highlightHigher={false} />
                <StatRow label="Apoyo Joven (18-25)" val1={cand1.demographics.youth} val2={cand2.demographics.youth} suffix="%" />
                <StatRow label="Apoyo Mujeres" val1={cand1.demographics.female} val2={cand2.demographics.female} suffix="%" />
                <StatRow label="Estrato Alto (4-6)" val1={cand1.demographics.strata456} val2={cand2.demographics.strata456} suffix="%" />
            </div>

            {/* Qualitative Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-200">
                <div className="p-6 border-r border-slate-200 bg-slate-50/50">
                    <div className="mb-4">
                        <h4 className="flex items-center text-sm font-bold text-slate-800 mb-2">
                            <Target size={16} className="mr-2 text-blue-600" /> Propuesta Insignia
                        </h4>
                        <div className="bg-white p-3 rounded border border-slate-200 text-sm text-slate-600 shadow-sm">
                            <span className="font-bold block text-slate-800 mb-1">{cand1.proposals[0].title}</span>
                            {cand1.proposals[0].detail}
                        </div>
                    </div>
                     <div>
                        <h4 className="flex items-center text-sm font-bold text-slate-800 mb-2">
                            <AlertCircle size={16} className="mr-2 text-red-600" /> Debilidad Principal
                        </h4>
                        <p className="text-sm text-slate-600">{cand1.weaknesses[0]}</p>
                    </div>
                </div>

                <div className="p-6 bg-slate-50/50">
                    <div className="mb-4">
                        <h4 className="flex items-center text-sm font-bold text-slate-800 mb-2">
                            <Target size={16} className="mr-2 text-blue-600" /> Propuesta Insignia
                        </h4>
                        <div className="bg-white p-3 rounded border border-slate-200 text-sm text-slate-600 shadow-sm">
                            <span className="font-bold block text-slate-800 mb-1">{cand2.proposals[0].title}</span>
                            {cand2.proposals[0].detail}
                        </div>
                    </div>
                     <div>
                        <h4 className="flex items-center text-sm font-bold text-slate-800 mb-2">
                            <AlertCircle size={16} className="mr-2 text-red-600" /> Debilidad Principal
                        </h4>
                        <p className="text-sm text-slate-600">{cand2.weaknesses[0]}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
