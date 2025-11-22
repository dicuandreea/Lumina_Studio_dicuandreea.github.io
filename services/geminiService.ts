import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCreativeDescription = async (title: string, technique: string): Promise<string> => {
  if (!apiKey) return "Descriere indisponibilă (API Key lipsă).";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a short, artistic, and surreal description (max 2 sentences) in Romanian for a digital artwork titled "${title}" created using the "${technique}" technique. It should sound mysterious and elegant.`,
    });
    return response.text || "O capodoperă digitală unică.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "O compoziție vizuală complexă ce explorează limitele percepției.";
  }
};