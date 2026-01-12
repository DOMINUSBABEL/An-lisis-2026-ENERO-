import React from 'react';
import { SOCIAL_STATS } from '../constants';
import { SocialRadar } from './Charts';
import { Smartphone, ThumbsUp, MessageCircle, BarChart2 } from 'lucide-react';

export const SocialMedia: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-gradient-to-br from-indigo-900 to-purple-800 rounded-xl p-6 text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Dominio Digital</h2>
                <p className="text-indigo-100 mb-6">
                    El análisis de Big Data muestra una correlación directa entre la agresividad en redes (viralidad) y el crecimiento en encuestas. 
                    Abelardo de la Espriella domina TikTok con un Engagement Rate (ER) del 6.2%.
                </p>
                <div className="flex gap-4">
                     <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <p className="text-xs text-indigo-200">Viralidad Top</p>
                        <p className="font-bold text-lg">TikTok</p>
                     </div>
                     <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <p className="text-xs text-indigo-200">Volumen Top</p>
                        <p className="font-bold text-lg">X (Twitter)</p>
                     </div>
                </div>
            </div>
            
             <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center items-center">
                <h3 className="text-slate-500 font-medium mb-4 w-full text-left">Comparativa: Engagement vs Sentimiento</h3>
                <SocialRadar data={SOCIAL_STATS.filter(s => s.platform === 'X')} />
                <p className="text-xs text-slate-400 mt-2">Datos de plataforma X (Twitter)</p>
            </div>
        </div>

        {/* Detailed Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_STATS.map((stat, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-800">{stat.candidate}</h3>
                        <span className={`text-xs px-2 py-1 rounded font-medium ${stat.platform === 'TikTok' ? 'bg-black text-white' : 'bg-blue-400 text-white'}`}>
                            {stat.platform}
                        </span>
                    </div>
                    <div className="p-5 space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-slate-600 gap-2">
                                <Users size={16} />
                                <span className="text-sm">Seguidores</span>
                            </div>
                            <span className="font-bold text-slate-900">{stat.followers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center text-slate-600 gap-2">
                                <BarChart2 size={16} />
                                <span className="text-sm">Engagement Rate</span>
                            </div>
                            <span className="font-bold text-indigo-600">{stat.engagementRate}%</span>
                        </div>
                         
                         {/* Sentiment Bar */}
                         <div>
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                <span>Sentimiento</span>
                            </div>
                            <div className="h-2 w-full flex rounded-full overflow-hidden">
                                <div style={{ width: `${stat.sentimentPositive}%` }} className="bg-emerald-500 h-full" />
                                <div style={{ width: `${stat.sentimentNeutral}%` }} className="bg-slate-300 h-full" />
                                <div style={{ width: `${stat.sentimentNegative}%` }} className="bg-red-500 h-full" />
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                                <span>Pos {stat.sentimentPositive}%</span>
                                <span>Neg {stat.sentimentNegative}%</span>
                            </div>
                         </div>
                    </div>
                </div>
            ))}
        </div>

         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="text-yellow-600 shrink-0" />
            <div>
                <h4 className="font-bold text-yellow-800 text-sm">Riesgo de Desinformación</h4>
                <p className="text-sm text-yellow-700 mt-1">
                    El informe destaca un 30% de contenido con riesgo de "Fake News" o descontextualización, especialmente en videos cortos de TikTok relacionados con propuestas económicas exageradas.
                </p>
            </div>
        </div>
    </div>
  );
};
import { Users, AlertTriangle } from 'lucide-react';
