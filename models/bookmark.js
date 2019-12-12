module.exports = function(sequelize, DataTypes) {
  var BookMark = sequelize.define("BookMark", {
    City: { type:DataTypes.STRING, allowNull: false},
    Address: { type:DataTypes.TEXT, allowNull: false},
    Notes:DataTypes.TEXT,
    Image: { type:DataTypes.STRING, allowNull: true,defaultValue:'https://cdn2.momjunction.com/wp-content/uploads/2014/10/halloween-coloring-pages-printable-scary-a4.jpg'}
  },{
      timestamps: false
  });
  return BookMark;
};
