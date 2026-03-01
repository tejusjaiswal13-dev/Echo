import { NextRequest, NextResponse } from "next/server";

const HF_API_KEY = process.env.HF_API_KEY;

async function callHFModel(text: string) {
    if (!HF_API_KEY) return null;

    try {
        const response = await fetch("https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${HF_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: text }),
        });

        if (!response.ok) return null;

        const result = await response.json();
        // Result format: [[{label: "POSITIVE", score: 0.9}, {label: "NEGATIVE", score: 0.1}]]
        if (Array.isArray(result) && result[0] && Array.isArray(result[0])) {
            return result[0];
        }
        return null;
    } catch (error) {
        console.error("HF API Error:", error);
        return null;
    }
}

export async function POST(req: NextRequest) {
    try {
        const { text } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "Missing text to analyze" }, { status: 400 });
        }

        let sentiment = "Neutral";
        let hfResult = await callHFModel(text);

        if (hfResult) {
            const top = hfResult.reduce((prev: any, current: any) => (prev.score > current.score) ? prev : current);
            if (top.label === "NEGATIVE") {
                sentiment = top.score > 0.8 ? "Critical" : "Moderate";
            } else if (top.label === "POSITIVE") {
                sentiment = "Positive";
            }
        }

        // Improved Categorization Logic for Hackathon Demo
        const lowerText = text.toLowerCase();
        let category = "General";
        if (lowerText.includes("road") || lowerText.includes("bridge") || lowerText.includes("street")) category = "Infrastructure";
        else if (lowerText.includes("water") || lowerText.includes("drain") || lowerText.includes("sewage")) category = "Water & Sanitation";
        else if (lowerText.includes("hospital") || lowerText.includes("clinic") || lowerText.includes("doctor") || lowerText.includes("health")) category = "Health";
        else if (lowerText.includes("school") || lowerText.includes("teacher") || lowerText.includes("education")) category = "Education";
        else if (lowerText.includes("light") || lowerText.includes("electricity") || lowerText.includes("power")) category = "Power";

        // Simulating Bias Detection
        const biasAlert = text.length < 50 ? "Insufficient depth for bias scoring" : "Low Representation of Minority Groups";

        return NextResponse.json({
            sentiment: sentiment,
            category: category,
            biasAlert: biasAlert,
            nlpTags: ["Priority", sentiment === "Critical" ? "Urgent" : "Analyzed"],
            trustImpactEstimate: sentiment === "Critical" ? "-2.1%" : "+4.5%"
        });
    } catch (error) {
        console.error("Analysis Route Error:", error);
        return NextResponse.json({ error: "Failed to analyze input" }, { status: 500 });
    }
}
