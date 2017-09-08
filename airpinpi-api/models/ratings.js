module.exports = (sequelize, DataType) => {
  const Ratings = sequelize.define('Ratings', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataType.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    rating: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Ratings.belongsToMany(models.Users, { through: 'RatingsUsers' });
        Ratings.belongsToMany(models.Toilets, { through: 'RatingsToilets' });
      },
    },
  });
  return Ratings;
};
