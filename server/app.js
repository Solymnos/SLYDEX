import express from 'express';
import { initDB } from './src/db.js';

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(5000, () => {
    console.log("Server  started on port 5000");
});

await initDB();