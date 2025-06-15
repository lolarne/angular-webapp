const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Show = sequelize.define("Show", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

User.hasMany(Show);
Show.belongsTo(User);

module.exports = Show;
