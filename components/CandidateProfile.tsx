import React, { useState } from 'react';
import { CANDIDATES } from '../constants';
import { CheckCircle2, XCircle, User, Briefcase, GraduationCap, Quote } from 'lucide-react';
import { DemographicChart } from './Charts';
import { Candidate } from '../types';

interface CardProps {
  candidate: Candidate;
}

const Card: React.FC<CardProps> = ({ candidate }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'proposals' | 'demographics'>('overview');

    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
            {/* Header */}
            <div className={`p-6 border-b border-slate-100 ${
                candidate.ideology.includes('Derecha') ? 'bg-blue-50/50' : 
                candidate.ideology.includes('Izquierda') ? 'bg-red-50/50' : 
                'bg-green-50/50'
            }`}>
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex gap-2 mb-2">
                             <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                                candidate.ideology.includes('Derecha') ? 'bg-blue-100 text-blue-700' : 
                                candidate.ideology.includes('Izquierda') ? 'bg-red-100 text-red-700' : 
                                'bg-green-100 text-green-700'
                            }`}>
                                {candidate.party}
                            </span>
                            {candidate.coalition && (
                                <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                                    {candidate.coalition}
                                </span>
                            )}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">{candidate.name}</h2>
                        <p className="text-slate-500 text-sm mt-1">{candidate.ideology}</p>
                    </div>
                    <div className="bg-white p-3 rounded-full shadow-sm border border-slate-100">
                        <User size={24} className="text-slate-700" />
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-100 text-sm font-medium">
                <button 
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 p-3 text-center transition-colors ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    Resumen
                </button>
                <button 
                    onClick={() => setActiveTab('proposals')}
                    className={`flex-1 p-3 text-center transition-colors ${activeTab === 'proposals' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    Propuestas
                </button>
                <button 
                    onClick={() => setActiveTab('demographics')}
                    className={`flex-1 p-3 text-center transition-colors ${activeTab === 'demographics' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                    Demografía
                </button>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col min-h-[300px]">
                
                {/* OVERVIEW TAB */}
                {activeTab === 'overview' && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="flex flex-col gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                             <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Briefcase size={14} /> <span>{candidate.previousOffice}</span>
                             </div>
                             <div className="flex items-center gap-2 text-sm text-slate-600">
                                <GraduationCap size={14} /> <span>{candidate.education}</span>
                             </div>
                             <div className="flex items-center gap-2 text-sm text-slate-600">
                                <Quote size={14} /> <span className="italic">"{candidate.slogan}"</span>
                             </div>
                        </div>
                        
                        <p className="text-slate-700 text-sm leading-relaxed">
                            {candidate.description}
                        </p>

                        <div className="grid grid-cols-1 gap-3 mt-2">
                            <div>
                                <h4 className="flex items-center text-xs font-bold text-emerald-700 mb-1">
                                    <CheckCircle2 size={12} className="mr-1" /> Fortalezas
                                </h4>
                                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                                    {candidate.strengths.slice(0, 2).map((s, i) => <li key={i}>{s}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="flex items-center text-xs font-bold text-red-700 mb-1">
                                    <XCircle size={12} className="mr-1" /> Debilidades
                                </h4>
                                <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                                    {candidate.weaknesses.slice(0, 2).map((w, i) => <li key={i}>{w}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* PROPOSALS TAB */}
                {activeTab === 'proposals' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                        {candidate.proposals.map((prop, idx) => (
                            <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-bold text-sm text-slate-800">{prop.title}</h4>
                                    <span className="text-[10px] uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                        {prop.category}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-600">
                                    {prop.detail}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* DEMOGRAPHICS TAB */}
                {activeTab === 'demographics' && (
                    <div className="animate-in fade-in duration-300 h-full flex flex-col">
                        <h4 className="text-sm font-bold text-slate-700 mb-3 text-center">Perfil del Votante</h4>
                        <DemographicChart data={candidate.demographics} />
                        <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                            <div className="bg-blue-50 p-2 rounded">
                                <span className="block text-xs text-blue-600 font-bold">Hombres</span>
                                <span className="text-lg font-bold text-slate-800">{candidate.demographics.male}%</span>
                            </div>
                            <div className="bg-pink-50 p-2 rounded">
                                <span className="block text-xs text-pink-600 font-bold">Mujeres</span>
                                <span className="text-lg font-bold text-slate-800">{candidate.demographics.female}%</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

             {/* Footer Stats */}
             <div className="p-4 bg-slate-50 border-t border-slate-100 mt-auto">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-slate-500 uppercase">Intención de Voto</span>
                    <span className="text-xl font-bold text-slate-900">{candidate.votingIntention}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full mt-2 overflow-hidden">
                    <div 
                    style={{ width: `${candidate.votingIntention}%` }} 
                    className={`h-full rounded-full ${
                        candidate.ideology.includes('Derecha') ? 'bg-blue-600' : 
                        candidate.ideology.includes('Izquierda') ? 'bg-red-600' : 
                        'bg-green-600'
                    }`}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export const CandidateProfile: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-right-4 duration-500">
      {CANDIDATES.map((candidate) => (
        <Card key={candidate.id} candidate={candidate} />
      ))}
    </div>
  );
};