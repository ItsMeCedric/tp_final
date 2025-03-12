import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "Accès non autorisé" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ajoute l'utilisateur décodé au request object
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};

export default authenticate;
