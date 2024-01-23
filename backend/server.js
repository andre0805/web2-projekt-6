import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'node:url'

dotenv.config();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const baseURL = host === 'localhost' ? `http://${host}:${port}` : `https://${host}`;

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/genres', async (req, res) => {
  try {
    // Get genres from genres.json
    const genresFile = path.join(__dirname, 'data', 'genres.json');
    const genresData = fs.readFileSync(genresFile, 'utf8');
    const genres = JSON.parse(genresData);
    res.json(genres);
  } catch (error) {
    console.error(error)
    res.json([])
  }
})

app.get('/api/movies', async (req, res) => {
  try {
    // Get movies from movies.json
    const moviesFile = path.join(__dirname, 'data', 'movies.json');
    const moviesData = fs.readFileSync(moviesFile, 'utf8');
    const movies = JSON.parse(moviesData);
    res.json(movies.slice(0, 3));
  } catch (error) {
    console.error(error)
    res.json([])
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening at ${baseURL}`);
});