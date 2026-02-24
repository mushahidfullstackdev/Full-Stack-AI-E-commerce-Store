import pkg from "pg";
const { client } = pkg;

const database = new client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const connectionIns = async () => {
  try {
    await database.connect();
    console.log("database connected successfully", connectionIns);
  } catch (error) {
    console.error("error while connecting Database");
    process.exit(1)
  }
};


export default connectionIns;
