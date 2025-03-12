import { Router } from "express";
import movieController from "../controllers/movieController.js";
import authenticate from "../middlewares/authMiddleware.js";

const movieRouter = Router();

// afficher tous
movieRouter.get("/", movieController.getAllMovies);

// afficher par ID
movieRouter.get("/:id", movieController.getMovieById);

// ajouter un film
movieRouter.post("/", authenticate, movieController.uploadImage, movieController.createMovie);

// modifier un film
movieRouter.put("/:id", authenticate, movieController.uploadImage, movieController.updateMovie);

// supprimer un film
movieRouter.delete("/:id", authenticate, movieController.deleteMovie);

export default movieRouter;
