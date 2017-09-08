module.exports = (sequelize, DataType) => {
  const WCCategories = sequelize.define('WCCategories', {
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
  }, {
    classMethods: {
      associate: (models) => {
        WCCategories.hasMany(models.WCs);
      },
    },
  });
  return WCCategories;
};
