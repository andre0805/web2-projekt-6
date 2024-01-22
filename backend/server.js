import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;
const baseURL = host === 'localhost' ? `http://${host}:${port}` : `https://${host}`;

const app = express();

app.get('/genres', async (req, res) => {
  try {
    // Get genres from genres.json
    const genresData = fs.readFileSync('./data/genres.json', 'utf8');
    const genres = JSON.parse(genresData);
    res.json(genres);
  } catch (error) {
    console.error(error)
    res.json([])
  }
})

app.get('/movies', async (req, res) => {
  try {
    // Get movies from movies.json
    const moviesData = fs.readFileSync('./data/movies.json', 'utf8');
    const movies = JSON.parse(moviesData);
    res.json(movies);
  } catch (error) {
    console.error(error)
    res.json([])
  }
});

app.listen(port, () => {
  console.log(`Listening at ${baseURL}`);
});