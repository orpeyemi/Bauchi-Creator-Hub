
import { GoogleGenAI, Type } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateProjectPitch = async (idea: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: `Based on this creative project idea: "${idea}", generate a structured business pitch. The pitch should be suitable for presenting to potential investors or for grant applications like the Tony Elumelu Foundation. The output MUST be in markdown format. Include the following sections: Executive Summary, Project Description, Target Audience, Market Strategy, Operational Plan, and Financial Projections (with placeholder numbers). Keep the tone professional and encouraging, tailored to a creative entrepreneur in Bauchi State, Nigeria.`,
        config: {
            temperature: 0.7,
            topP: 0.95,
        }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating project pitch:", error);
    return "Sorry, I couldn't generate a pitch right now. Please check your API key and try again. Remember that a strong pitch includes a clear vision, a defined audience, and a solid plan!";
  }
};
