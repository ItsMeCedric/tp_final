import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class Movie extends Model {}

Movie.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  imageUrl: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  tableName: "movies"
});

export default Movie;
