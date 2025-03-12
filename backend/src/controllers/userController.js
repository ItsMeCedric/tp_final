import userService from "../services/userService.js";
import jwt from "jsonwebtoken";

const create = async (req, res) => {
  const data = req.body;
  try {
    const user = await userService.create(data);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    let user = await userService.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    const isMatch = await userService.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    // token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllusers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json(users);
};

const findById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await userService.findById(id);
  res.status(200).json(user);
};

const update = async (req, res) => {
  const data = req.body;
  const user = await userService.update(data);
  res.status(200).json(user);
};

const destroy = async (req, res) => {
  const id = parseInt(req.body.id);
  await userService.destroy(id);
  res.status(200).json({ id: id });
};

export default { create, login, getAllusers, findById, update, destroy };