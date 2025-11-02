import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // .env dosyasını oku

const app = express();
app.use(cors());

// örnek endpoint: /api/users
app.get("/api/users", async (req, res) => {
  try {
    const response = await fetch("https://api.github.com", {
      headers: {
        "Accept": "application/vnd.github+json",
        "Authorization": `Bearer ${process.env['GITHUB_TOKEN']}`,
        "X-GitHub-Api-Version": "2022-11-28"
      },
    });

    const data = await response.json();
    res.json(data);       
  } catch (err) {
    res.status(500).json({ error: "GitHub isteğinde hata oluştu" });
  }
});

app.listen(3000, () => console.log("✅ Server çalışıyor: http://localhost:3000"));
