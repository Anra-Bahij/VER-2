<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Masukkan Nomor Target</title>
</head>
<body>
  <h2>Masukkan Nomor Target</h2>
  <input type="text" id="nomor" placeholder="Contoh: 6281234567890">
  <button onclick="kirim()">Kirim</button>
  <p id="status"></p>

  <script>
    async function kirim() {
      const nomor = document.getElementById("nomor").value.trim();
      const status = document.getElementById("status");

      if (!nomor.startsWith("628")) {
        status.innerText = "Nomor harus diawali dengan 628!";
        status.style.color = "red";
        return;
      }

      try {
        const response = await fetch("/api/kirim", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nomor })
        });

        const data = await response.json();

        status.innerText = data.message;
        status.style.color = response.ok ? "green" : "red";

      } catch (error) {
        status.innerText = "Gagal menghubungi server.";
        status.style.color = "red";
        console.error(error);
      }
    }
  </script>
</body>
</html>
