import Movie from "../../models/movie.js";

const findAll = async () => {
  return await Movie.findAll();
};

const findById = async (id) => {
  return await Movie.findByPk(id);
};

const create = async (data) => {
  return await Movie.create(data);
};

const update = async (id, data) => {
  return await Movie.update(data, { where: { id } });
};

const destroy = async (id) => {
  return await Movie.destroy({ where: { id } });
};

export default { findAll, findById, create, update, destroy };
