import { Candidate, SocialStats, RegionalData, Issue, TimeSeriesPoint, NarrativeCluster, RiskEvent } from './types';

export const METHODOLOGY_DATA = {
    company: "AtlasIntel",
    sampleSize: 4520,
    universe: "Votantes activos en Colombia",
    coverage: "Nacional (32 departamentos)",
    dates: "2 al 7 de Enero de 2026",
    marginError: "±1%",
    confidence: "95%",
    technique: "Reclutamiento digital aleatorio (RDR)",
    client: "Consultora Talleyrand"
};

export const COUNTRY_ISSUES: Issue[] = [
    { topic: "Inseguridad / Extorsión", percentage: 42.5, description: "La preocupación principal, impulsada por bandas criminales y disidencias." },
    { topic: "Corrupción", percentage: 28.3, description: "Escándalos recientes en entidades gubernamentales." },
    { topic: "Economía / Desempleo", percentage: 18.2, description: "Estancamiento del crecimiento económico." },
    { topic: "Salud", percentage: 6.5, description: "Incertidumbre por reforma al sistema." },
    { topic: "Otros", percentage: 4.5, description: "Educación, Vías, etc." }
];

export const COUNTRY_DIRECTION = [
    { name: 'Rumbo Incorrecto', value: 68.0, fill: '#dc2626' },
    { name: 'Rumbo Correcto', value: 24.0, fill: '#10b981' },
    { name: 'No Sabe', value: 8.0, fill: '#94a3b8' }
];

export const EVOLUTION_DATA: TimeSeriesPoint[] = [
    { date: 'Jun 2025', abelardo: 15, cepeda: 22, fajardo: 12, vicky: 5, indeciso: 46 },
    { date: 'Ago 2025', abelardo: 18, cepeda: 24, fajardo: 11, vicky: 8, indeciso: 39 },
    { date: 'Oct 2025', abelardo: 22, cepeda: 25, fajardo: 10, vicky: 10, indeciso: 33 },
    { date: 'Dic 2025', abelardo: 25, cepeda: 26, fajardo: 9, vicky: 11, indeciso: 29 },
    { date: 'Ene 2026', abelardo: 28, cepeda: 26.5, fajardo: 9.4, vicky: 12.5, indeciso: 24 }
];

// New Data: Digital Growth Velocity (Last 30 Days)
export const DIGITAL_GROWTH_DATA: TimeSeriesPoint[] = [
    { date: 'Sem 1', abelardo: 2.1, cepeda: 0.5, fajardo: 0.2, vicky: 3.5, paloma: 1.2 },
    { date: 'Sem 2', abelardo: 2.4, cepeda: 0.6, fajardo: 0.1, vicky: 3.8, paloma: 1.5 },
    { date: 'Sem 3', abelardo: 3.1, cepeda: 0.4, fajardo: 0.3, vicky: 4.2, paloma: 1.4 },
    { date: 'Sem 4', abelardo: 4.5, cepeda: 0.8, fajardo: 0.2, vicky: 4.0, paloma: 1.9 },
];

// New Data: Share of Voice (SOV)
export const SHARE_OF_VOICE_DATA = [
    { name: 'Abelardo', value: 32, fill: '#1e40af' },
    { name: 'Vicky', value: 28, fill: '#8b5cf6' },
    { name: 'Cepeda', value: 18, fill: '#dc2626' },
    { name: 'Paloma', value: 12, fill: '#f59e0b' },
    { name: 'Fajardo', value: 6, fill: '#10b981' },
    { name: 'Otros', value: 4, fill: '#94a3b8' },
];

// New Data: Narrative Clusters
export const NARRATIVE_CLUSTERS: NarrativeCluster[] = [
    { topic: '#ManoDura / Bukele', volume: 95, sentiment: 'polarized', candidates: ['Abelardo', 'Paloma'], description: "Narrativa dominante. Genera alto engagement por miedo/esperanza. Algoritmicamente favorecida en TikTok." },
    { topic: '#PazTotal / Vida', volume: 60, sentiment: 'negative', candidates: ['Cepeda'], description: "Asociada a percepción de debilidad estatal. El sentimiento negativo supera al positivo 3 a 1." },
    { topic: '#Corrupción / Destape', volume: 85, sentiment: 'negative', candidates: ['Vicky'], description: "Motor de crecimiento de Vicky Dávila. Moviliza indignación ciudadana (ira)." },
    { topic: '#Educación / Acuerdo', volume: 30, sentiment: 'neutral', candidates: ['Fajardo'], description: "Bajo volumen de conversación. No logra romper el muro del algoritmo." }
];

// New Data: Risk Matrix
export const RISK_MATRIX: RiskEvent[] = [
    { id: 'R1', type: 'Bot Attack', severity: 'High', target: 'Abelardo', description: "Ataque coordinado desde cuentas IP Rusia/Venezuela impulsando hashtags de 'Parapolítica'.", status: 'Active' },
    { id: 'R2', type: 'Fake News', severity: 'Medium', target: 'Cepeda', description: "Video deepfake circulando en WhatsApp sobre supuesta expropiación de pensiones.", status: 'Monitoring' },
    { id: 'R3', type: 'Old Tweet', severity: 'High', target: 'Vicky', description: "Resurgimiento de trinos de 2018 contradiciendo postura actual. Viralidad orgánica alta.", status: 'Contained' },
    { id: 'R4', type: 'Algorithm Change', severity: 'Low', target: 'General', description: "Cambio en algoritmo de X (Twitter) reduce visibilidad de enlaces externos (noticias).", status: 'Active' }
];

export const CANDIDATES: Candidate[] = [
  {
    id: 'abelardo',
    name: 'Abelardo de la Espriella',
    party: 'Defensores de la Patria',
    coalition: 'Alianza por el Orden',
    ideology: 'Derecha',
    votingIntention: 28.0,
    age: 47,
    education: 'Derecho (U. Sergio Arboleda)',
    previousOffice: 'Ninguno (Sector Privado)',
    slogan: 'Mano firme, corazón patriota',
    description: 'Líder en encuestas y viralidad digital. Propuesta de "Mano Dura" contra la delincuencia.',
    strengths: ['Fuerte en hombres (30.4%)', 'Altos ingresos (34.9%)', 'Viralidad en TikTok (ER 6.2%)'],
    weaknesses: ['Polémicas pasadas', 'Rechazo en sectores progresistas', 'Falta de experiencia pública'],
    proposals: [
      { title: 'Megacárceles', detail: 'Construcción de 3 centros penitenciarios de alta seguridad tipo Bukele.', category: 'Seguridad' },
      { title: 'Cero Impuestos a Agro', detail: 'Eliminación de renta por 10 años a nuevos proyectos agrícolas.', category: 'Economía' }
    ],
    demographics: { male: 60, female: 40, youth: 35, adult: 45, senior: 20, strata123: 40, strata456: 60 }
  },
  {
    id: 'cepeda',
    name: 'Iván Cepeda',
    party: 'Pacto Histórico',
    coalition: 'Frente Amplio',
    ideology: 'Izquierda',
    votingIntention: 26.5,
    age: 63,
    education: 'Filosofía (U. San Buenaventura)',
    previousOffice: 'Senador de la República',
    slogan: 'La Paz Total es el camino',
    description: 'Consolida la izquierda progresista. Heredero político del Pacto.',
    strengths: ['Lidera en jóvenes 18-24 (39.3%)', 'Retiene base Petro (52.4%)', 'Fuerte en Amazonía/Orinoquía'],
    weaknesses: ['Menor viralidad', 'Asociado a desaprobación del gobierno actual', 'Resistencia en sector empresarial'],
    proposals: [
      { title: 'Reforma Agraria 2.0', detail: 'Aceleración de compra de tierras y titulación masiva.', category: 'Social' },
      { title: 'Transición Energética', detail: 'Prohibición total de nuevo fracking y exploración petrolera.', category: 'Ambiente' }
    ],
    demographics: { male: 45, female: 55, youth: 60, adult: 30, senior: 10, strata123: 70, strata456: 30 }
  },
  {
    id: 'vicky',
    name: 'Vicky Dávila',
    party: 'Independiente',
    coalition: 'Movimiento Ciudadano',
    ideology: 'Derecha',
    votingIntention: 12.5,
    age: 52,
    education: 'Comunicación Social (U. Autónoma)',
    previousOffice: 'Periodista / Directora Semana',
    slogan: 'La verdad nos hará libres',
    description: 'Outsider política que capitaliza el descontento mediático y la crítica al gobierno.',
    strengths: ['Alto reconocimiento (98%)', 'Capacidad de agenda mediática', 'Conexión emocional'],
    weaknesses: ['Polarización extrema', 'Cuestionamiento ético periodístico', 'Sin maquinaria política'],
    proposals: [
      { title: 'Lucha Anticorrupción', detail: 'Cárcel intramural sin beneficios para corruptos.', category: 'Justicia' },
      { title: 'Libertad de Prensa', detail: 'Garantías absolutas para el ejercicio del periodismo crítico.', category: 'Justicia' }
    ],
    demographics: { male: 48, female: 52, youth: 20, adult: 50, senior: 30, strata123: 55, strata456: 45 }
  },
  {
    id: 'fajardo',
    name: 'Sergio Fajardo',
    party: 'Nueva Mayoría',
    coalition: 'Centro Esperanza',
    ideology: 'Centro',
    votingIntention: 9.4,
    age: 69,
    education: 'Matemático (U. de los Andes)',
    previousOffice: 'Gobernador de Antioquia',
    slogan: 'Se puede ser diferente',
    description: 'Representa el centro fragmentado. Fuerte en Antioquia y sector académico.',
    strengths: ['Educación superior', 'Centro-izquierda (33.3%)', 'Imagen de moderación'],
    weaknesses: ['Percepción de "tibio"', 'Estancado en crecimiento digital', 'Desgaste electoral'],
    proposals: [
      { title: 'Revolución Educativa', detail: 'Universidad pública gratuita y de calidad garantizada.', category: 'Social' },
      { title: 'Lucha contra Corrupción', detail: 'Transparencia total en contratación estatal.', category: 'Justicia' }
    ],
    demographics: { male: 50, female: 50, youth: 40, adult: 40, senior: 20, strata123: 30, strata456: 70 }
  },
  {
    id: 'paloma',
    name: 'Paloma Valencia',
    party: 'Centro Democrático',
    coalition: 'Primero Colombia',
    ideology: 'Derecha',
    votingIntention: 7.2,
    age: 48,
    education: 'Abogada y Filósofa (U. de los Andes)',
    previousOffice: 'Senadora de la República',
    slogan: 'Firmeza con corazón',
    description: 'Líder de oposición y figura clave del Centro Democrático. Énfasis en familia y Estado austero.',
    strengths: ['Debate parlamentario', 'Base del Centro Democrático', 'Imagen de autoridad'],
    weaknesses: ['Resistencia en sectores juveniles', 'Asociación a gobierno tradicional'],
    proposals: [
      { title: 'Federalismo Autonómico', detail: 'Regiones con control de sus recursos y tributación (Colombia Federal).', category: 'Economía' },
      { title: 'Reforma a la Justicia', detail: 'Una sola corte suprema para acabar con el choque de trenes.', category: 'Justicia' }
    ],
    demographics: { male: 53, female: 47, youth: 15, adult: 45, senior: 40, strata123: 25, strata456: 75 }
  },
  {
    id: 'pinzon',
    name: 'Juan Carlos Pinzón',
    party: 'Gran Consulta',
    coalition: 'Equipo por Colombia',
    ideology: 'Centro-Derecha',
    votingIntention: 5.1,
    age: 53,
    education: 'Economista (Javeriana)',
    previousOffice: 'Ministro de Defensa',
    slogan: 'Seguridad y Progreso',
    description: 'Exministro de Defensa, perfil técnico y de seguridad.',
    strengths: ['Fuerte en Bogotá', 'Voto de opinión conservador', 'Experiencia en seguridad'],
    weaknesses: ['Baja visibilidad digital', 'Carisma limitado', 'Sombra de otros líderes'],
    proposals: [
      { title: 'Seguridad Urbana', detail: 'Tecnología e inteligencia artificial contra el crimen.', category: 'Seguridad' },
      { title: 'Inversión Extranjera', detail: 'Incentivos tributarios para multinacionales.', category: 'Economía' }
    ],
    demographics: { male: 58, female: 42, youth: 10, adult: 50, senior: 40, strata123: 35, strata456: 65 }
  },
  {
    id: 'claudia',
    name: 'Claudia López',
    party: 'Independiente',
    coalition: 'Verde Esperanza',
    ideology: 'Centro-Izquierda',
    votingIntention: 2.6,
    age: 55,
    education: 'Ciencia Política (Externado)',
    previousOffice: 'Alcaldesa de Bogotá',
    slogan: 'Hechos, no carretas',
    description: 'Exalcaldesa de Bogotá. Apuesta ambiental, movilidad y social.',
    strengths: ['Reconocimiento nacional', 'Gestión en Bogotá (obras)', 'Voto de opinión'],
    weaknesses: ['Desgaste de gestión', 'Ruptura con sectores verdes', 'Temperamento'],
    proposals: [
      { title: 'Sistema del Cuidado', detail: 'Expansión nacional de manzanas del cuidado para mujeres.', category: 'Social' },
      { title: 'Movilidad Sostenible', detail: 'Apoyo a sistemas férreos y metro en ciudades principales.', category: 'Ambiente' }
    ],
    demographics: { male: 30, female: 70, youth: 45, adult: 45, senior: 10, strata123: 50, strata456: 50 }
  }
];

export const SOCIAL_STATS: SocialStats[] = [
  {
    candidate: 'Abelardo de la Espriella',
    platform: 'TikTok',
    followers: 527000,
    engagementRate: 6.2,
    sentimentPositive: 70,
    sentimentNegative: 25,
    sentimentNeutral: 5
  },
  {
    candidate: 'Abelardo de la Espriella',
    platform: 'X',
    followers: 148398,
    engagementRate: 4.8,
    sentimentPositive: 65,
    sentimentNegative: 30,
    sentimentNeutral: 5
  },
  {
    candidate: 'Iván Cepeda',
    platform: 'X',
    followers: 1898934,
    engagementRate: 3.2,
    sentimentPositive: 65,
    sentimentNegative: 30,
    sentimentNeutral: 5
  },
  {
    candidate: 'Sergio Fajardo',
    platform: 'X',
    followers: 1600000,
    engagementRate: 2.9,
    sentimentPositive: 40,
    sentimentNegative: 40,
    sentimentNeutral: 20
  },
  {
    candidate: 'Vicky Dávila',
    platform: 'X',
    followers: 3700000,
    engagementRate: 4.2,
    sentimentPositive: 50,
    sentimentNegative: 40,
    sentimentNeutral: 10
  },
  {
    candidate: 'Paloma Valencia',
    platform: 'X',
    followers: 850000,
    engagementRate: 5.1,
    sentimentPositive: 62,
    sentimentNegative: 33,
    sentimentNeutral: 5
  }
];

export const REGIONAL_DATA: RegionalData[] = [
  { region: 'Antioquia', leadingCandidate: 'Centro-Derecha (Fajardo/Vicky)', notes: 'Fuerte sentimiento anti-Petro. Abelardo gana terreno.' },
  { region: 'Bogotá', leadingCandidate: 'Competitivo', notes: 'Fajardo y Pinzón fuertes. Cepeda mantiene bases. Claudia López diluida.' },
  { region: 'Caribe', leadingCandidate: 'Izquierda / Abelardo', notes: 'Izquierda fuerte históricamente, pero Abelardo crece por origen regional (Montería).' },
  { region: 'Pacífico', leadingCandidate: 'Iván Cepeda', notes: 'Bastión de la izquierda (Francia Márquez influencia).' },
  { region: 'Central', leadingCandidate: 'Abelardo de la Espriella', notes: 'Voto conservador y de seguridad. Paloma Valencia mantiene nichos fuertes en el Cauca y Huila.' }
];

export const SECOND_ROUND_DATA = [
  { scenario: 'Abelardo vs Cepeda', abelardo: 44.2, cepeda: 34.9, indeciso: 20.9 },
  { scenario: 'Abelardo vs Fajardo', abelardo: 41.5, fajardo: 38.2, indeciso: 20.3 },
  { scenario: 'Vicky vs Cepeda', abelardo: 42.0, cepeda: 36.0, indeciso: 22.0 },
  { scenario: 'Paloma vs Cepeda', abelardo: 39.5, cepeda: 38.5, indeciso: 22.0 },
];

export const PETRO_APPROVAL = [
  { name: 'Aprueba', value: 35.7, fill: '#ef4444' }, // Red for Pacto
  { name: 'Desaprueba', value: 53.5, fill: '#1e3a8a' }, // Blue for Opposition
  { name: 'Indeciso', value: 10.8, fill: '#94a3b8' }, // Grey
];
