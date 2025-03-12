import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import movieRouter from "./routers/movieRouter.js";
import authenticate from "./middlewares/authMiddleware.js";

// variables d'environnement
dotenv.config();

const app = express();
app.use(express.json());

// authentification > s'incrire et se connecter
app.use("/auth", userRouter);

// films avec authentification
app.use("/movies", authenticate, movieRouter);

// endpoint test 
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API de gestion de films");
});

// démarrer serveur
app.listen(5004, () => {
  console.log("Server started on port 5004");
});
