import React from 'react';
import { 
  NARRATIVE_CLUSTERS, 
  SHARE_OF_VOICE_DATA, 
  DIGITAL_GROWTH_DATA, 
  RISK_MATRIX 
} from '../constants';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { 
  Hash, MessageSquare, TrendingUp, AlertOctagon, ShieldAlert, 
  Activity, Users, Mic2, Smartphone 
} from 'lucide-react';

/**
 * 1. NARRATIVAS Y TÓPICOS
 * Analysis of semantic clusters and emotional drivers.
 */
export const DigitalNarratives: React.FC = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header Insight */}
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl">
                <h3 className="text-indigo-900 font-bold flex items-center gap-2">
                    <MessageSquare size={20} />
                    Insight Talleyrand: Polarización Emocional
                </h3>
                <p className="text-indigo-800 mt-2 text-sm leading-relaxed">
                    El análisis semántico revela que la <strong>ira</strong> y el <strong>miedo</strong> son los principales movilizadores digitales. 
                    Las narrativas de "orden" (#ManoDura) tienen una tasa de viralidad 3x superior a las narrativas de "esperanza" o "acuerdo".
                </p>
            </div>

            {/* Clusters Visualization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {NARRATIVE_CLUSTERS.map((cluster, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className={`absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 rounded-full opacity-10 ${
                            cluster.sentiment === 'positive' ? 'bg-green-500' :
                            cluster.sentiment === 'negative' ? 'bg-red-500' :
                            cluster.sentiment === 'polarized' ? 'bg-purple-500' : 'bg-slate-500'
                        }`}></div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-xl font-bold text-slate-900">{cluster.topic}</h4>
                                <div className="flex gap-2 mt-2">
                                    {cluster.candidates.map(c => (
                                        <span key={c} className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded capitalize ${
                                cluster.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                                cluster.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                                cluster.sentiment === 'polarized' ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-700'
                            }`}>
                                {cluster.sentiment}
                            </span>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                                <span>Volumen de Conversación</span>
                                <span>{cluster.volume}/100</span>
                            </div>
                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div style={{ width: `${cluster.volume}%` }} className={`h-full rounded-full ${
                                    cluster.volume > 80 ? 'bg-indigo-600' : 'bg-indigo-400'
                                }`}></div>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                            {cluster.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};


/**
 * 2. BENCHMARKING DIGITAL
 * Comparative metrics on growth and Share of Voice.
 */
export const DigitalBenchmark: React.FC = () => {
    return (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Share of Voice */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Mic2 size={18} className="text-blue-600" /> Share of Voice (SOV)
                    </h3>
                    <p className="text-xs text-slate-500 mb-4">Dominio de la conversación pública en plataformas digitales.</p>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={SHARE_OF_VOICE_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={2}
                                    dataKey="value"
                                >
                                    {SHARE_OF_VOICE_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom" height={36} iconType="circle" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Growth Velocity */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                         <div>
                            <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                <TrendingUp size={18} className="text-emerald-600" /> Velocidad de Crecimiento
                            </h3>
                            <p className="text-xs text-slate-500">Tasa de nuevos seguidores (%) - Últimas 4 Semanas</p>
                        </div>
                        <div className="text-right">
                             <span className="block text-xs text-slate-400">Top Performer</span>
                             <span className="font-bold text-purple-600">Vicky Dávila (4.0% prom)</span>
                        </div>
                    </div>
                   
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={DIGITAL_GROWTH_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="date" tick={{fontSize: 12}} />
                            <YAxis unit="%" tick={{fontSize: 12}} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Legend />
                            <Line type="monotone" dataKey="abelardo" stroke="#1e40af" strokeWidth={3} dot={{r:4}} />
                            <Line type="monotone" dataKey="vicky" stroke="#8b5cf6" strokeWidth={3} dot={{r:4}} />
                            <Line type="monotone" dataKey="cepeda" stroke="#dc2626" strokeWidth={2} />
                            <Line type="monotone" dataKey="paloma" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Platform Matrix */}
            <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-blue-400" />
                    <h3 className="font-bold text-lg">Eficiencia por Plataforma</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-2">TikTok</h4>
                        <div className="text-2xl font-bold mb-1">Abelardo</div>
                        <p className="text-xs text-emerald-400">Dominio Absoluto</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-2">X (Twitter)</h4>
                        <div className="text-2xl font-bold mb-1">Vicky / Cepeda</div>
                        <p className="text-xs text-yellow-400">Campo de Batalla</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <h4 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-2">Instagram</h4>
                        <div className="text-2xl font-bold mb-1">Fajardo</div>
                        <p className="text-xs text-blue-400">Nicho Educado</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


/**
 * 3. MATRIZ DE RIESGOS Y ATAQUES
 * "War Room" view for threats.
 */
export const DigitalRisks: React.FC = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-red-50 border border-red-100 p-6 rounded-xl">
                 <div>
                    <h3 className="text-xl font-bold text-red-900 flex items-center gap-2">
                        <ShieldAlert size={24} /> War Room: Amenazas Activas
                    </h3>
                    <p className="text-red-800 text-sm mt-1">Monitoreo en tiempo real de ataques coordinados, fake news y vulnerabilidades.</p>
                 </div>
                 <div className="flex gap-4 text-center">
                     <div>
                         <span className="block text-2xl font-bold text-red-700">2</span>
                         <span className="text-[10px] uppercase font-bold text-red-900 tracking-wider">High Risk</span>
                     </div>
                     <div>
                         <span className="block text-2xl font-bold text-amber-600">1</span>
                         <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Medium</span>
                     </div>
                 </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {RISK_MATRIX.map((risk) => (
                    <div key={risk.id} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-start md:items-center hover:bg-slate-50 transition-colors">
                        {/* Severity Badge */}
                        <div className={`shrink-0 w-2 h-full absolute left-0 top-0 rounded-l-lg ${
                             risk.severity === 'High' ? 'bg-red-600' : 
                             risk.severity === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
                        }`}></div>

                        <div className="p-3 rounded-full bg-slate-100 text-slate-600 shrink-0">
                            {risk.type === 'Bot Attack' ? <Users size={20} /> : 
                             risk.type === 'Fake News' ? <AlertOctagon size={20} /> :
                             <Activity size={20} />}
                        </div>

                        <div className="flex-1">
                            <div className="flex gap-2 items-center mb-1">
                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded text-white ${
                                     risk.severity === 'High' ? 'bg-red-600' : 
                                     risk.severity === 'Medium' ? 'bg-amber-500' : 'bg-blue-500'
                                }`}>
                                    {risk.severity}
                                </span>
                                <h4 className="font-bold text-slate-800 text-sm">{risk.type}</h4>
                                <span className="text-xs text-slate-400">• Objetivo: {risk.target}</span>
                            </div>
                            <p className="text-sm text-slate-600">{risk.description}</p>
                        </div>

                        <div className="md:text-right shrink-0">
                             <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                                 risk.status === 'Active' ? 'bg-red-50 text-red-700 border-red-200 animate-pulse' :
                                 risk.status === 'Contained' ? 'bg-green-50 text-green-700 border-green-200' :
                                 'bg-blue-50 text-blue-700 border-blue-200'
                             }`}>
                                 {risk.status}
                             </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-6">
                <h4 className="font-bold text-slate-900 mb-4">Recomendaciones Estratégicas</h4>
                <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                        <span><strong>Contención:</strong> No interactuar con el Hashtag #Parapolítica para evitar amplificación algorítmica. Usar "Silence & Bury" strategy.</span>
                    </li>
                    <li className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                        <span><strong>Contra-narrativa:</strong> Desplegar testimonios de víctimas apoyando la propuesta de megacárceles para retomar la narrativa de seguridad.</span>
                    </li>
                    <li className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                        <span><strong>Vigilancia:</strong> Activar monitoreo 24/7 sobre cuentas satélite de la campaña opositora en Telegram.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};