import React, { useState } from 'react';
import { SECOND_ROUND_DATA } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Trophy } from 'lucide-react';

export const Simulator: React.FC = () => {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [undecidedSplit, setUndecidedSplit] = useState(50); // % of undecided going to candidate A

  const baseScenario = SECOND_ROUND_DATA[selectedScenarioIdx] as any;
  
  // Parse numeric values
  const candAName = baseScenario.scenario.split(' vs ')[0];
  const candBName = baseScenario.scenario.split(' vs ')[1];
  
  // Dynamic Calculation
  const undecidedVotes = baseScenario.indeciso;
  const votesForA = (undecidedVotes * undecidedSplit) / 100;
  const votesForB = undecidedVotes - votesForA;
  
  const finalA = parseFloat((baseScenario.abelardo + votesForA).toFixed(1));
  const finalB = parseFloat(((baseScenario.cepeda || baseScenario.fajardo || baseScenario.pinzon || 0) + votesForB).toFixed(1));
  
  const winner = finalA > finalB ? candAName : candBName;
  const gap = Math.abs(finalA - finalB).toFixed(1);

  const chartData = [
    { name: candAName, value: finalA, fill: '#1e40af' },
    { name: candBName, value: finalB, fill: '#dc2626' }
  ];

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Simulador de Segunda Vuelta</h2>
            <p className="text-slate-300">
                Ajusta la distribución del voto indeciso ({baseScenario.indeciso}%) para proyectar el ganador final.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Controls */}
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <label className="block text-sm font-bold text-slate-700 mb-2">Seleccionar Escenario</label>
                <select 
                    value={selectedScenarioIdx}
                    onChange={(e) => {
                        setSelectedScenarioIdx(Number(e.target.value));
                        setUndecidedSplit(50);
                    }}
                    className="w-full p-2 border border-slate-300 rounded-lg mb-8 outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {SECOND_ROUND_DATA.map((s, i) => (
                        <option key={i} value={i}>{s.scenario}</option>
                    ))}
                </select>

                <div className="mb-6">
                    <label className="block text-sm font-bold text-slate-700 mb-4">
                        Distribución de Indecisos
                    </label>
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={undecidedSplit}
                        onChange={(e) => setUndecidedSplit(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-xs font-medium text-slate-500 mt-2">
                        <span>100% a {candAName}</span>
                        <span>100% a {candBName}</span>
                    </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                    <div className="flex justify-between mb-2">
                        <span>Base {candAName}:</span>
                        <span className="font-bold">{baseScenario.abelardo}%</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Base {candBName}:</span>
                        <span className="font-bold">{baseScenario.cepeda || baseScenario.fajardo || baseScenario.pinzon}%</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2 text-slate-500">
                        <span>Indecisos a repartir:</span>
                        <span>{baseScenario.indeciso}%</span>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center items-center relative">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Resultado Proyectado</h3>
                
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            paddingAngle={2}
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                        >
                             {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 text-center">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">Ganador</p>
                    <h1 className="text-3xl font-bold text-slate-900 mt-1">{winner}</h1>
                    <div className="flex items-center justify-center gap-2 mt-2 text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                        <Trophy size={16} />
                        <span>+{gap}% Ventaja</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12 w-full mt-4">
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-blue-800">{finalA}%</h4>
                        <p className="text-sm text-slate-500">{candAName}</p>
                    </div>
                    <div className="text-center">
                         <h4 className="text-xl font-bold text-red-700">{finalB}%</h4>
                         <p className="text-sm text-slate-500">{candBName}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};