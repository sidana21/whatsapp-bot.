
const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// سيرفر صغير عشان Railway ما يوقف التطبيق
app.get("/", (req, res) => {
  res.send("✅ WhatsApp bot is running...");
});
app.listen(port, () => console.log(`Server running on port ${port}`));

// إنشاء عميل واتساب
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("📱 Scan this QR with your WhatsApp!");
});

client.on("ready", () => {
  console.log("✅ WhatsApp is ready!");
});

client.initialize();
