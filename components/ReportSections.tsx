import React from 'react';
import { METHODOLOGY_DATA, COUNTRY_ISSUES, COUNTRY_DIRECTION, REGIONAL_DATA, EVOLUTION_DATA, CANDIDATES } from '../constants';
import { ApprovalChart, EvolutionChart } from './Charts';
import { FileText, CheckCircle, Users, Calendar, MapPin, TrendingUp, AlertTriangle } from 'lucide-react';

export const MethodologyView: React.FC = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                            <FileText className="mr-2 text-blue-600" /> Especificaciones Técnicas
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500">Firma Encuestadora</span>
                                <span className="font-bold text-slate-800">{METHODOLOGY_DATA.company}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500">Cliente Contratante</span>
                                <span className="font-bold text-slate-800">{METHODOLOGY_DATA.client}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500">Universo</span>
                                <span className="font-medium text-slate-800 text-right w-1/2">{METHODOLOGY_DATA.universe}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2">
                                <span className="text-slate-500">Cobertura Geográfica</span>
                                <span className="font-medium text-slate-800">{METHODOLOGY_DATA.coverage}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                         <h4 className="font-bold text-slate-700 mb-4">Estadística de la Muestra</h4>
                         <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded shadow-sm">
                                <Users className="text-blue-500 mb-2" />
                                <span className="block text-2xl font-bold text-slate-900">{METHODOLOGY_DATA.sampleSize}</span>
                                <span className="text-xs text-slate-500">Encuestas Completas</span>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <CheckCircle className="text-emerald-500 mb-2" />
                                <span className="block text-2xl font-bold text-slate-900">{METHODOLOGY_DATA.marginError}</span>
                                <span className="text-xs text-slate-500">Margen de Error</span>
                            </div>
                             <div className="bg-white p-4 rounded shadow-sm">
                                <Calendar className="text-purple-500 mb-2" />
                                <span className="block text-lg font-bold text-slate-900 leading-tight">{METHODOLOGY_DATA.dates}</span>
                                <span className="text-xs text-slate-500 mt-1 block">Periodo de Campo</span>
                            </div>
                         </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 mb-2">Técnica de Recolección</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        {METHODOLOGY_DATA.technique}. Se implementaron cuotas controladas por sexo, edad, estrato y región para garantizar la representatividad nacional. La validación de datos se realizó mediante algoritmos de detección de fraude y geolocalización IP.
                    </p>
                </div>
            </div>
        </div>
    )
}

export const CountryMoodView: React.FC = () => {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Mood Chart */}
                <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Percepción Rumbo del País</h3>
                    <p className="text-xs text-slate-500 mb-4">¿Cree usted que las cosas en Colombia van por buen o mal camino?</p>
                    <ApprovalChart data={COUNTRY_DIRECTION} />
                    <div className="mt-4 text-center">
                         <span className="text-3xl font-bold text-red-600">68%</span>
                         <span className="block text-sm text-slate-500 font-medium">Pesimismo Estructural</span>
                    </div>
                </div>

                {/* Main Problems */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                     <h3 className="font-bold text-slate-900 mb-6">Principales Problemas del País</h3>
                     <div className="space-y-5">
                        {COUNTRY_ISSUES.map((issue, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-end mb-1">
                                    <span className="font-bold text-slate-700">{issue.topic}</span>
                                    <span className="font-bold text-slate-900">{issue.percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${idx === 0 ? 'bg-red-600' : 'bg-blue-600'}`}
                                        style={{ width: `${issue.percentage}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">{issue.description}</p>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Qualitative Insight */}
             <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <div className="flex gap-4">
                    <AlertTriangle className="text-amber-600 shrink-0" />
                    <div>
                        <h4 className="font-bold text-amber-900">Análisis de Talleyrand</h4>
                        <p className="text-amber-800 mt-1 text-sm leading-relaxed">
                            Existe una correlación directa entre la percepción negativa de seguridad (42.5%) y el crecimiento de candidatos de "Mano Dura". El electorado está priorizando el orden público sobre las reformas sociales, lo cual explica el descenso de la agenda progresista.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const EvolutionView: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 animate-in fade-in duration-500">
             <div className="mb-6 flex justify-between items-end">
                <div>
                    <h3 className="text-xl font-bold text-slate-900">Evolución de Intención de Voto</h3>
                    <p className="text-slate-500 text-sm">Tendencia histórica últimos 6 meses (Jun 2025 - Ene 2026)</p>
                </div>
                <div className="text-right hidden md:block">
                     <span className="block text-xs text-slate-400">Tendencia Principal</span>
                     <span className="font-bold text-blue-700 flex items-center justify-end">
                        <TrendingUp size={16} className="mr-1" /> Crecimiento Derecha
                     </span>
                </div>
             </div>
             
             <EvolutionChart data={EVOLUTION_DATA} />

             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                     <h4 className="font-bold text-blue-800 text-sm mb-2">Abelardo (+13%)</h4>
                     <p className="text-xs text-slate-600">Crecimiento sostenido desde junio, capitalizando el voto indeciso y la crisis de seguridad.</p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                     <h4 className="font-bold text-red-800 text-sm mb-2">Cepeda (+4.5%)</h4>
                     <p className="text-xs text-slate-600">Crecimiento moderado, consolidando la base petrista pero encontrando un techo temprano.</p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                     <h4 className="font-bold text-slate-600 text-sm mb-2">Indecisos (-22%)</h4>
                     <p className="text-xs text-slate-600">Drástica reducción de la indecisión, migrando mayoritariamente hacia opciones de oposición.</p>
                 </div>
             </div>
        </div>
    );
}

export const RegionalDeepDive: React.FC = () => {
    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {REGIONAL_DATA.map((region, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                    <MapPin size={20} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900">{region.region}</h3>
                            </div>
                            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                Gana: {region.leadingCandidate}
                            </span>
                        </div>
                        <p className="text-slate-600 text-sm mb-4 leading-relaxed bg-slate-50 p-3 rounded">
                            {region.notes}
                        </p>
                        
                        {/* Mock Mini Bars for the region */}
                        <div className="space-y-2">
                            <div className="flex items-center text-xs">
                                <span className="w-24 font-medium text-slate-500">Abelardo</span>
                                <div className="flex-1 h-2 bg-slate-100 rounded-full mx-2">
                                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '35%' }}></div>
                                </div>
                                <span className="font-bold text-slate-700">35%</span>
                            </div>
                            <div className="flex items-center text-xs">
                                <span className="w-24 font-medium text-slate-500">Cepeda</span>
                                <div className="flex-1 h-2 bg-slate-100 rounded-full mx-2">
                                    <div className="h-full bg-red-600 rounded-full" style={{ width: '28%' }}></div>
                                </div>
                                <span className="font-bold text-slate-700">28%</span>
                            </div>
                             <div className="flex items-center text-xs">
                                <span className="w-24 font-medium text-slate-500">Fajardo</span>
                                <div className="flex-1 h-2 bg-slate-100 rounded-full mx-2">
                                    <div className="h-full bg-green-600 rounded-full" style={{ width: '15%' }}></div>
                                </div>
                                <span className="font-bold text-slate-700">15%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
