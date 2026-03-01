import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const geminiModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

async function callHFasFallback(prompt: string) {
    const HF_API_KEY = process.env.HF_API_KEY;
    if (!HF_API_KEY) return null;
    try {
        const response = await fetch("https://api-inference.huggingface.co/models/google/gemma-2b-it", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${HF_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: `Analyze governance scenario: ${prompt}` }),
        });
        const res = await response.json();
        return res[0]?.generated_text || null;
    } catch (e) {
        return null;
    }
}

export async function runSimulation(prompt: string) {
    try {
        if (!apiKey) {
            return {
                text: "Gemini API key is not configured. (Running in Simulation Mode). Expected trust pulse shift: +10.2%. Key resource needed: Material requisition for Ward 4.",
                status: "mock"
            };
        }

        const fullPrompt = `You are Echo Assistant, an AI governance expert for Indian panchayat/ward leaders. 
    Analyze the following governance scenario and predict its impact on 'Trust Pulse' (0-100) and community sentiment. 
    Be professional, data-driven, and provide explainable recommendations.
    
    Scenario: ${prompt}
    
    Output format: 
    - Predicted Trust Shift: [%]
    - Key Sentiment Change: [Description]
    - Recommended Action: [Action]`;

        const result = await geminiModel.generateContent(fullPrompt);
        const response = await result.response;
        return {
            text: response.text(),
            status: "success"
        };
    } catch (error: any) {
        console.error("Gemini API Error Detail:", error);

        // Fallback to HF if Gemini fails
        const fallbackRes = await callHFasFallback(prompt);
        if (fallbackRes) {
            return {
                text: `(HF Fallback Mode): ${fallbackRes}`,
                status: "success"
            };
        }

        return {
            text: `AI Simulator Error: ${error.message || "Unknown error"}. Please check API configuration and limits.`,
            status: "error"
        };
    }
}
