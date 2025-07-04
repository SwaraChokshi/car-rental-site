const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../db");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, hash]
  );
  res.json(result.rows[0]);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  if (!user.rows.length) return res.status(401).send("User not found");
  const match = await bcrypt.compare(password, user.rows[0].password);
  if (!match) return res.status(401).send("Wrong password");
  res.json(user.rows[0]);
});

module.exports = router;