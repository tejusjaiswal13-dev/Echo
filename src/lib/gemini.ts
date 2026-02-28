import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export const geminiModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

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
    } catch (error) {
        console.error("Gemini API Error:", error);
        return {
            text: "An error occurred with the AI simulator. Please check API configuration.",
            status: "error"
        };
    }
}
