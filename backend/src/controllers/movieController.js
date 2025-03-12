import movieService from "../services/movieService.js";
import upload from "../middlewares/multerMiddleware.js";
import path from "path";


const getAllMovies = async (req, res) => {
  const movies = await movieService.getAllMovies();
  res.status(200).json(movies);
};


const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await movieService.getMovieById(id);
  if (!movie) {
    return res.status(404).json({ message: "Film non trouvé" });
  }
  res.status(200).json(movie);
};


const createMovie = async (req, res) => {
  const { title, description, releaseDate } = req.body;
  const imageUrl = req.file ? path.join('uploads', req.file.filename) : null; //URL image
  const movieData = { title, description, releaseDate, imageUrl };
  
  try {
    const movie = await movieService.createMovie(movieData);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la création du film" });
  }
};


const updateMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await movieService.updateMovie(id, req.body);
  if (!movie) {
    return res.status(404).json({ message: "Film non trouvé" });
  }
  res.status(200).json(movie);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  await movieService.deleteMovie(id);
  res.status(204).send();
};

// middleware multer
const uploadImage = upload.single("image"); // Nom du champ image dans le formulaire

export default { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie, uploadImage };
