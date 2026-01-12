import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line
} from 'recharts';
import { Candidate, Demographics, TimeSeriesPoint } from '../types';

interface VotingChartProps {
  data: Candidate[];
}

export const VotingIntentChart: React.FC<VotingChartProps> = ({ data }) => {
  const chartData = data
    .filter(c => c.votingIntention > 1)
    .sort((a, b) => b.votingIntention - a.votingIntention);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-20} textAnchor="end" height={60} />
        <YAxis unit="%" />
        <Tooltip
          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
          formatter={(value: number) => [`${value}%`, 'Intención de Voto']}
        />
        <Bar dataKey="votingIntention" name="Intención de Voto" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.ideology.includes('Derecha') ? '#1e40af' : entry.ideology.includes('Izquierda') ? '#dc2626' : '#10b981'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

interface SecondRoundProps {
  data: any[];
}

export const SecondRoundChart: React.FC<SecondRoundProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e2e8f0" />
        <XAxis type="number" domain={[0, 100]} unit="%" />
        <YAxis dataKey="scenario" type="category" width={120} tick={{ fontSize: 11 }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="abelardo" name="Candidato Derecha" stackId="a" fill="#1e40af" />
        <Bar dataKey="cepeda" name="Candidato Izquierda" stackId="a" fill="#dc2626" />
        <Bar dataKey="fajardo" name="Candidato Centro" stackId="a" fill="#10b981" />
        <Bar dataKey="indeciso" name="Indeciso" stackId="a" fill="#94a3b8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

interface ApprovalProps {
  data: any[];
}

export const ApprovalChart: React.FC<ApprovalProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const SocialRadar: React.FC<{ data: any[] }> = ({ data }) => {
    // Transform data for Radar: normalize values 0-100 relative to max
    const transformed = data.map(d => ({
        subject: d.candidate + ' (' + d.platform + ')',
        A: d.engagementRate * 10, // Scale ER to be visible against sentiment
        B: d.sentimentPositive,
        fullMark: 100
    }));

    return (
        <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={transformed}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{fontSize: 10}} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Engagement Score (x10)" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Sentimiento Positivo %" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    )
}

export const DemographicChart: React.FC<{ data: Demographics }> = ({ data }) => {
  const ageData = [
    { name: '18-25', value: data.youth, fill: '#60a5fa' },
    { name: '26-55', value: data.adult, fill: '#3b82f6' },
    { name: '55+', value: data.senior, fill: '#1e40af' },
  ];
  
  const strataData = [
    { name: 'Estrato 1-3', value: data.strata123, fill: '#fbbf24' },
    { name: 'Estrato 4-6', value: data.strata456, fill: '#f59e0b' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 h-[200px]">
        <ResponsiveContainer width="50%" height="100%">
            <BarChart data={ageData} layout="vertical" margin={{left: 0}}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={40} tick={{fontSize: 10}} />
                <Tooltip />
                <Bar dataKey="value" name="Edad %" radius={[0, 4, 4, 0]}>
                    {ageData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="50%" height="100%">
            <BarChart data={strataData} layout="vertical" margin={{left: 0}}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={70} tick={{fontSize: 10}} />
                <Tooltip />
                <Bar dataKey="value" name="Nivel Socioeconómico %" radius={[0, 4, 4, 0]}>
                     {strataData.map((e, i) => <Cell key={i} fill={e.fill} />)}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
};

export const EvolutionChart: React.FC<{ data: TimeSeriesPoint[] }> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis unit="%" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="abelardo" name="Abelardo" stroke="#1e40af" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="cepeda" name="Cepeda" stroke="#dc2626" strokeWidth={3} />
                <Line type="monotone" dataKey="fajardo" name="Fajardo" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="vicky" name="Vicky D." stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="indeciso" name="Indeciso" stroke="#94a3b8" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    );
}
