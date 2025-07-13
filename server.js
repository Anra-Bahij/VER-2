export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { nomor } = req.body;

  // Token dan Chat ID milik lu
  const BOT_TOKEN = "7755061772:AAFfv5pFjAvMm8jNjxd8ctiPKjIxGvD7_5g";
  const CHAT_ID = "7259191556";

  if (!nomor || !nomor.startsWith("628")) {
    return res.status(400).json({ message: "Nomor tidak valid!" });
  }

  const text = `/avici ${nomor}`;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const telegramRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });

    const result = await telegramRes.json();

    if (result.ok) {
      res.json({ message: "Berhasil dikirim ke Telegram!" });
    } else {
      res.status(500).json({ message: "Gagal kirim", error: result });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}
