module.exports = function(sequelize, DataTypes) {
  var BookMark = sequelize.define("BookMark", {
    City: DataTypes.STRING,
    Address: DataTypes.TEXT,
    Notes:DataTypes.TEXT
  });
  return BookMark;
};
