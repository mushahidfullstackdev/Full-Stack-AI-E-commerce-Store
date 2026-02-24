import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: "your_new_password",
  port: process.env.DB_PORT,
});

pool.on("connect", () => {
  console.log("Database connected successfully");
});

pool.on("error", (err) => {
  console.error("Unexpected database error", err);
  process.exit(1);
});

export default pool;