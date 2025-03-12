import movieRepository from "../repositories/movieRepository.js";

const getAllMovies = () => {
  return movieRepository.findAll();
};

const getMovieById = (id) => {
  return movieRepository.findById(id);
};

const createMovie = (data) => {
  return movieRepository.create(data);
};

const updateMovie = (id, data) => {
  return movieRepository.update(id, data);
};

const deleteMovie = (id) => {
  return movieRepository.destroy(id);
};

export default { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie };
