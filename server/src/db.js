import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config({ paht : '../.env' });

const USERNAME = process.env.POSTGRES_USERNAME;
const PASSWORD = process.env.POSTGRES_PASSWORD;
const DATABASE = process.env.POSTGRES_DATABASE;
const ADDRESS = process.env.POSTGRES_ADDRESS;
const PORT = process.env.POSTGRES_PORT;

const sql = postgres(`postgres://${USERNAME}:${PASSWORD}@${ADDRESS}:${PORT}/${DATABASE}`);

const initDB = async () =>
{
    // TEST CONNECTION

    try {
        await sql`SELECT 1`;
        console.log("Connexion DB : OK");
    } catch (err) {
        console.log("Connexion DB : " + err);
    }
    
    // CREATE TABLES
    
    try {
        await sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username TEXT NOT NULL UNIQUE,
                email TEXT NOT NULL UNIQUE,
                password_hash TEXT NOT NULL,
                create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        console.log("Database user created")
    } catch (err) {
        console.log(err);
    }
}

export { sql, initDB };