import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

class User extends Model {}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate:{
           isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
},{
    sequelize,
    tableName: "users"
})


export default User;
