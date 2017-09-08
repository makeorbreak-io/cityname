module.exports = (sequelize, DataType) => {
  const Ratings = sequelize.define('Ratings', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataType.DECIMAL(10, 8),
      allowNull: false,
      defaultValue: 5,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Ratings.belongsTo(models.Users);
        Ratings.belongsTo(models.WCs);
      },
    },
  });
  return Ratings;
};
