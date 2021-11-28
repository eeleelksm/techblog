const User = require("./User");
const Blog_Post = require("./Blog_Post");

// create associations
User.hasMany(Blog_Post, {
  foreignKey: "user_id"
});

Blog_Post.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = { User, Blog_Post };