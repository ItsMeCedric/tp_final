import bcrypt from "bcrypt";
import User from "../../models/user.js";

const findAll = async () => {
  return await User.findAll();
};

const findById = async (id) => {
  return await User.findByPk(id);
};

const findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

const findByName = async (name) => {
  return await User.findOne({ where: { name } });
};

const create = async (data) => {
  const salt = await bcrypt.genSalt(10); // salt
  const hashedPassword = await bcrypt.hash(data.password, salt); // hash du mdp
  data.password = hashedPassword; // remplace mdp hash
  return await User.create(data);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword); // compare mdp hash
};

const update = async (data) => {
  const id = data.id;
  return await User.update(data, { where: { id } });
};

const destroy = async (id) => {
  return await User.destroy({ where: { id } });
};


export default { findAll, findById, findByName, findByEmail, create, comparePassword, update, destroy };
