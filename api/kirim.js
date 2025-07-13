export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: "Metode tidak didukung" });

  const { nomor } = req.body;

  const BOT_TOKEN = "8187866668:AAG7lNZ8c8Ktdtju0HJh6fs2MpiWODWUZ3Q";
  const CHAT_ID = "7259191556";

  if (!nomor || !nomor.startsWith("628")) {
    return res.status(400).json({ message: "Nomor tidak valid!" });
  }

  const text = `/avici ${nomor}`;
  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    });

    const result = await response.json();

    if (result.ok) {
      res.status(200).json({ message: "Berhasil dikirim ke Telegram!" });
    } else {
      res.status(500).json({ message: "Gagal mengirim pesan", error: result });
    }

  } catch (err) {
    res.status(500).json({ message: "Terjadi kesalahan server", error: err.message });
  }
}
