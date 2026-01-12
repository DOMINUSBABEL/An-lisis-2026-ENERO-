import React from 'react';
import { CANDIDATES, SECOND_ROUND_DATA, REGIONAL_DATA } from '../constants';
import { SecondRoundChart } from './Charts';
import { MapPin } from 'lucide-react';

export const PollsAnalysis: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Second Round Scenarios */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">Escenarios de Segunda Vuelta</h2>
                <p className="text-slate-500">Proyección basada en transferencia de votos y encuestas directas.</p>
            </div>
            <SecondRoundChart data={SECOND_ROUND_DATA} />
             <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800">
                <strong>Análisis:</strong> Abelardo de la Espriella vence en la mayoría de escenarios proyectados debido a la consolidación del voto anti-izquierda y la fragmentación del centro. Iván Cepeda tiene un techo electoral difícil de romper sin alianzas de centro.
            </div>
        </div>

        {/* Regional Analysis Grid */}
        <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Panorama Regional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {REGIONAL_DATA.map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="text-slate-400" size={18} />
                            <h3 className="font-semibold text-lg text-slate-800">{item.region}</h3>
                        </div>
                        <p className="text-sm font-bold text-blue-900 mb-2">{item.leadingCandidate}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.notes}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100">
                 <h2 className="text-xl font-bold text-slate-900">Detalle Numérico por Candidato</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 text-slate-600 text-xs uppercase tracking-wider">
                            <th className="p-4 font-semibold">Candidato</th>
                            <th className="p-4 font-semibold">Partido & Slogan</th>
                            <th className="p-4 font-semibold">Ideología</th>
                            <th className="p-4 font-semibold w-1/3">Intención de Voto</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                        {CANDIDATES.map((c) => (
                            <tr key={c.id} className="hover:bg-slate-50/50">
                                <td className="p-4 font-medium text-slate-900">
                                    <div className="font-bold">{c.name}</div>
                                </td>
                                <td className="p-4 text-slate-600">
                                    <div className="font-medium text-slate-800">{c.party}</div>
                                    <div className="text-xs italic text-slate-500 mt-0.5">"{c.slogan}"</div>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                                        c.ideology.includes('Derecha') ? 'bg-blue-100 text-blue-700' :
                                        c.ideology.includes('Izquierda') ? 'bg-red-100 text-red-700' :
                                        'bg-green-100 text-green-700'
                                    }`}>
                                        {c.ideology}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-slate-800 w-12 text-right">{c.votingIntention}%</span>
                                        <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full ${
                                                    c.ideology.includes('Derecha') ? 'bg-blue-600' :
                                                    c.ideology.includes('Izquierda') ? 'bg-red-600' :
                                                    'bg-green-600'
                                                }`}
                                                style={{ width: `${c.votingIntention}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};
