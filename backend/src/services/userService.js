import userRepository from "../repositories/userRepository.js";

const getAllUsers = () => {
  return userRepository.findAll();
};

const findById = (id) => {
  return userRepository.findById(id);
};

const findByEmail = (email) => {
  return userRepository.findByEmail(email);
};

const findByName = (name) => {
  return userRepository.findByName(name);
};

const create = (data) => {
  return userRepository.create(data);
};

const update = (data) => {
  return userRepository.update(data);
};

const destroy = (id) => {
  return userRepository.destroy(id);
};

const comparePassword = (password, hashedPassword) => {
  return userRepository.comparePassword(password, hashedPassword);
};

export default { getAllUsers, findById, findByName, findByEmail, create, update, destroy, comparePassword };
