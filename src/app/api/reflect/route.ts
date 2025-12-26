import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const { noisy, drains, leaveBehind } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reflection: "I hear you. Taking a moment to acknowledge this load is the first step."
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
      You are an empathetic, minimalist guide helping someone "Unload" their mental burden.
      The user has shared the following:
      1. What feels noisy: "${noisy}"
      2. What drains them: "${drains}"
      3. What they don't want to bring into 2025: "${leaveBehind}"

      Your task:
      - Respond in 2-3 short, gentle sentences.
      - Validate their exhaustion.
      - Make them feel seen.
      - DO NOT give advice.
      - DO NOT offer solutions or fixes.
      - DO NOT use bullet points.
      - Tone: Calm, grounding, non-judgmental.
    `;

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 100,
        temperature: 0.7,
      },
    });

    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      reflection: text?.trim() || "Thank you for sharing. Your burden is acknowledged."
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({
      reflection: "Thank you for writing this down. Just naming these things creates space."
    });
  }
}
