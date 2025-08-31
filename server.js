// server.js
import express from "express";
import fetch from "node-fetch"; // install with: npm install node-fetch express dotenv
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// DeepSeek proxy route
app.post("/api/deepseek", async (req, res) => {
  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}` // stored securely
      },
      body: JSON.stringify({
        model: "deepseek-chat", // or "deepseek-reasoner"
        messages: req.body.messages
      })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("✅ Backend running at http://localhost:3000"));
