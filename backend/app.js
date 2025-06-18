const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
//const { create } = require("domain");

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({

    user: "postgres",
    host: "postgres",
    database: "userdb",
    password: "postgres",
    port: 5432,
});



// Ensure the table exists
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
  );
`);

app.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
});

app.post("/add", async (req, res) => {
    const { name } = req.body;
    await pool.query("INSERT INTO users(name) VALUES($1)", [name]);
    res.json({ message: "User added" });
});

app.listen(3000,'0.0.0.0', () => console.log("Backend running on port 3000"));
