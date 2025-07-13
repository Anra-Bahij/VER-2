const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const BOT_TOKEN = "7755061772:AAFfv5pFjAvMm8jNjxd8ctiPKjIxGvD7_5g";
const CHAT_ID = "7259191556";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/kirim", async (req, res) => {
  const { nomor } = req.body;
  if (!nomor || !nomor.startsWith("628")) {
    return res.status(400).json({ message: "Nomor tidak valid!" });
  }

  const text = `/avici ${nomor}`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    const result = await response.json();

    if (result.ok) {
      res.json({ message: "Berhasil dikirim ke Telegram!" });
    } else {
      res.status(500).json({ message: "Gagal kirim", error: result });
    }
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
