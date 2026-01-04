import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { type, tone, content } = req.body;

  const prompt = `
Write a ${tone} ${type} email.
Improve clarity, grammar and professionalism.

Email content:
${content}
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    res.json({
      output: data.candidates[0].content.parts[0].text,
    });
  } catch (err) {
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(5000, () => {
  console.log("Gemini backend running on port 5000");
});
