import { NextRequest, NextResponse } from "next/server";
import { runSimulation } from "@/lib/gemini";

export async function POST(req: NextRequest) {
    try {
        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: "Missing prompt" }, { status: 400 });
        }

        const simulation = await runSimulation(prompt);

        return NextResponse.json(simulation);
    } catch (error) {
        console.error("Simulation Route Error:", error);
        return NextResponse.json({ error: "Failed to run simulation" }, { status: 500 });
    }
}
