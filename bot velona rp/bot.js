// bot.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour lire les JSON envoyés (si besoin)
app.use(express.json());

// Page d'accueil
app.get("/", (req, res) => {
  res.send("🤖 Mon bot est en ligne !");
});

// Exemple d'API simple
app.get("/hello", (req, res) => {
  res.json({ message: "Salut ! Je suis ton bot Node.js 😄" });
});

// Exemple de commande personnalisée
app.post("/repeat", (req, res) => {
  const { text } = req.body;
  if (!text)
    return res.status(400).json({ error: "Veuillez envoyer { text: '...' }" });
  res.json({ reply: `Tu as dit : ${text}` });
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Bot en ligne sur le port ${PORT}`);
});


---

## 💻 4️⃣ Lancer en local

Dans ton terminal :
```bash
npm install
npm start
