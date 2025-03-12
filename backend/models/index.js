require("../config/db");
const User = require("./user.model");
const Post = require("./post.model");
User.hasMany(Post)

module.exports = {User, Post}