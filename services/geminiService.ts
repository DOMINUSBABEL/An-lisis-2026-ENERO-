import { GoogleGenAI } from "@google/genai";
import { CANDIDATES, SECOND_ROUND_DATA, SOCIAL_STATS } from "../constants";

// Construct a context string from the hardcoded data to feed the AI
const REPORT_CONTEXT = `
Eres un analista político experto en las elecciones de Colombia 2026. Tienes acceso al siguiente informe técnico "Análisis de tendencias electorales - Enero 2026".

RESUMEN DE DATOS CLAVE:
1. INTENCIÓN DE VOTO (1ra Vuelta):
${CANDIDATES.map(c => `- ${c.name} (${c.party}): ${c.votingIntention}%. Ideología: ${c.ideology}. Edad: ${c.age}. Slogan: "${c.slogan}".`).join('\n')}

2. PERFIL DEMOGRÁFICO DE VOTANTES:
${CANDIDATES.map(c => `- ${c.name}: Hombres ${c.demographics.male}%, Mujeres ${c.demographics.female}%, Jóvenes ${c.demographics.youth}%, Estrato 1-3 ${c.demographics.strata123}%.`).join('\n')}

3. PROPUESTAS CLAVE:
${CANDIDATES.map(c => `- ${c.name}: ${c.proposals.map(p => p.title).join(', ')}.`).join('\n')}

4. ESCENARIOS 2da VUELTA:
${SECOND_ROUND_DATA.map(s => {
  const item = s as any;
  return `- ${item.scenario}: Abelardo ${item.abelardo || 'N/A'}%, Oponente ${item.cepeda || item.fajardo || item.pinzon}%, Indeciso ${item.indeciso}%`
}).join('\n')}

5. REDES SOCIALES:
${SOCIAL_STATS.map(s => `- ${s.candidate} en ${s.platform}: ${s.followers} seguidores, Engagement Rate ${s.engagementRate}%. Sentimiento Positivo: ${s.sentimentPositive}%.`).join('\n')}

DATOS CUALITATIVOS DEL INFORME:
- Polarización extrema: Derecha (Abelardo/Vicky) vs Izquierda (Cepeda).
- Desaprobación Petro: 53.5%. Esto impulsa el voto "anti-continuismo".
- Temas clave: Seguridad (extorsión), Economía, Corrupción.
- Metodología: Encuesta AtlasIntel, 4520 encuestados, margen error 1%.
- Vicky Dávila y Maria F. Cabal entran fuerte en la contienda dividiendo el voto de derecha.

INSTRUCCIONES:
Responde a las preguntas del usuario basándote EXCLUSIVAMENTE en esta información. Sé técnico, preciso y profesional.
`;

export const askGemini = async (question: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key no configurada. Por favor configura process.env.API_KEY.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: REPORT_CONTEXT,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "No se pudo generar una respuesta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocurrió un error al consultar al analista virtual. Por favor intenta de nuevo.";
  }
};