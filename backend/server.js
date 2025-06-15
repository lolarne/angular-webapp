const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const User = require("./models/User");
const Show = require("./models/Show");
const authRoutes = require("./routes/auth");
const bcrypt = require("bcryptjs");
const showRoutes = require("./routes/show.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/shows", showRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect DB and start server
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ MySQL connected.");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Unable to connect to DB:", err);
  });

sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("🗂️ Models synced.");
    const existingUser = await User.findOne({ where: { username: "demo" } });
    if (!existingUser) {
      const hashed = await bcrypt.hash("password123", 10);
      await User.create({ username: "demo", password: hashed });
      console.log("👤 Test user created: demo / password123");
    }
  })
  .catch((err) => console.error("❌ Sync error:", err));
