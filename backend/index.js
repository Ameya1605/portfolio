/* ================= SPAM FILTER ================= */

function isSpam({ name, email, message }) {

  const spamKeywords = [
    "crypto",
    "bitcoin",
    "forex",
    "loan",
    "free money",
    "investment",
    "click here",
    "earn $$$",
    "win prize",
  ];

  const text = `${name} ${email} ${message}`.toLowerCase();

  /* 1️⃣ keyword check */
  for (let word of spamKeywords) {
    if (text.includes(word)) return true;
  }

  /* 2️⃣ too many links */
  const links = message.match(/https?:\/\/|www\./g);
  if (links && links.length > 1) return true;

  /* 3️⃣ message too short */
  if (message.trim().length < 8) return true;

  /* 4️⃣ repeated characters (bot pattern) */
  if (/(.)\1{6,}/.test(message)) return true;

  return false;
}

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const FILE = "messages.json";

/* ================= EMAIL CONFIG ================= */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "farkadeameya05@gmail.com",
    pass: "ifzxoafeaxbmnvxx", // remove spaces if present
  },
});

/* ================= SAVE MESSAGE ================= */

app.post("/messages", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    time: new Date().toISOString(),
  };

  let messages = [];

  if (fs.existsSync(FILE)) {
    messages = JSON.parse(fs.readFileSync(FILE));
  }

  messages.push(newMessage);
  fs.writeFileSync(FILE, JSON.stringify(messages, null, 2));

  /* ================= SEND EMAIL ================= */

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <farkadeameya05@gmail.com>`,
      to: "farkadeameya05@gmail.com",
      subject: `📩 New Portfolio Message from ${name}`,
      html: `
        <h2>New Message Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
        <hr/>
        <small>Sent from Portfolio Contact Form</small>
      `,
    });

    console.log("✅ Email sent successfully");
  } catch (err) {
    console.error("❌ Email failed:", err);
  }

  res.json({ success: true });
});

/* ================= GET MESSAGES ================= */

app.get("/messages", (req, res) => {
  if (!fs.existsSync(FILE)) return res.json([]);
  const data = JSON.parse(fs.readFileSync(FILE));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});