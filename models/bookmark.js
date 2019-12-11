module.exports = function(sequelize, DataTypes) {
  var BookMark = sequelize.define("BookMark", {
    City: { type:DataTypes.STRING, allowNull: false},
    Address: { type:DataTypes.TEXT, allowNull: false},
    Notes:DataTypes.TEXT
  },{
      timestamps: false
  });
  return BookMark;
};
